import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface LowStockItem {
  id: number;
  itemName: string;
  category: string;
  quantityLeft: number;
  reorderLevel: number;
  status: 'Critical' | 'Warning';
}

@Injectable({
  providedIn: 'root'
})

export class LowStockAlertService {

  private apiUrl = 'https://localhost:44351/api/LowStockAlert/lowstock';

  constructor(private http: HttpClient) { }

  getLowStockItems(): Observable<LowStockItem[]> {
    return this.http.get<LowStockItem[]>(this.apiUrl);
  }
}
