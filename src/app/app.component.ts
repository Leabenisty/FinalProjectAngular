import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { CustomerScreenComponent } from './Components/Customers/customer-screen/customer-screen.component';
import { OrderProduct } from './Models/order-product';
import { OrderDetailComponent } from './Components/Orders/order-detail/order-detail.component';
=======
>>>>>>> origin/master

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, CommonModule, MainScreenComponent,CustomerScreenComponent],
=======
  imports: [RouterOutlet,CommonModule],
>>>>>>> origin/master
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  
  // constructor(private router: Router){}
  
  // navigateToProducts(){
  //   this.router.navigate(['/customers'])
  // }
}
=======
  title = 'AngularProject';
}
>>>>>>> origin/master
