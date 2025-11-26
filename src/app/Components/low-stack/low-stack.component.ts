import { Component } from '@angular/core';
import { LowStockAlertService, LowStockItem } from '../../Services/services/low-stock-alert.service';

@Component({
  selector: 'app-low-stack',
  standalone: false,
  templateUrl: './low-stack.component.html',
  styleUrl: './low-stack.component.css'
})
export class LowStackComponent {
  items: LowStockItem[] = [];
  filteredItems: LowStockItem[] = [];
  loading = true;
  categories: string[] = [];
  selectedCategory = '';

  constructor(private lowStockAlertService: LowStockAlertService) { }

  ngOnInit(): void {
    this.loadLowStockItems();
  }

  loadLowStockItems() {
    this.loading = true;
    this.lowStockAlertService.getLowStockItems().subscribe({
      next: (data) => {
        this.items = data;
        console.log("data",this.items)
        this.filteredItems = data;
        this.categories = [...new Set(data.map(i => i.category))];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Failed to load low stock items');
        this.loading = false;
      }
    });
  }

  filterByCategory() {
    if (!this.selectedCategory) {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(i => i.category === this.selectedCategory);
    }
  }

  getStatusClass(status: string): string {
    return status === 'Critical' ? 'critical' : 'warning';
  }
}
