import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerScreenComponent } from './customer-screen.component';

describe('CustomerScreenComponent', () => {
  let component: CustomerScreenComponent;
  let fixture: ComponentFixture<CustomerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
