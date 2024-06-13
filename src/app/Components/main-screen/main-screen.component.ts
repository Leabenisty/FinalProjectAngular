import { Component } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { CustomerScreenComponent } from '../Customers/customer-screen/customer-screen.component';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [MatTabsModule ,CustomerScreenComponent ,RouterModule],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'
})


export class MainScreenComponent {

  constructor(private router: Router){}

  onTabChange(event: MatTabChangeEvent){
    if(event.index === 0)
      this.router.navigate(['/products'])
    if (event.index === 1) 
     this.router.navigate(['/orders'])
    if (event.index === 2) 
    this.router.navigate(['/customers'])

    
  }
}
