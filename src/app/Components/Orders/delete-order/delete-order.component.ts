import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-order',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './delete-order.component.html',
  styleUrl: './delete-order.component.css'
})
export class DeleteOrderComponent {
  onDelete()
  {
    
  }
}
