import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowStackComponent } from './low-stack.component';

describe('LowStackComponent', () => {
  let component: LowStackComponent;
  let fixture: ComponentFixture<LowStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LowStackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
