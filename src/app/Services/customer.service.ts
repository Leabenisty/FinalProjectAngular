import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }
  
<<<<<<< HEAD
  // public customerList: Customer[] = [{
  //   name:"",
  //   address:"",
  //   phoneNumber:"",
  //   status:"",
  // }];

  // get(): Customer[] {
  //   return this.customerList 
  // }
  
  getCustomersList(): Observable<Customer[]> {
    return this._http.get<Customer[]>("https://localhost:7268/api/Customers");
  }

  getCustomerById(id:number): Observable<Customer> {
    return this._http.get<Customer>("https://localhost:7268/api/Customers/"+id);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this._http.post<Customer>("https://localhost:7268/api/Customers",customer);
  }
  
  updateCustomer(id:number, customer:Customer): Observable<Customer>{
    return this._http.put<Customer>("https://localhost:7268/api/Customers/"+id,customer);
  }

  deleteCustomer(id:number): Observable<void>{
    return this._http.delete<void>("https://localhost:7268/api/Customers/"+id);
=======
  public customerList: Customer[] = [{
    name:"",
    address:"",
    phoneNumber:"",
    status:"",
  }];

  get(): Customer[] {
    return this.customerList 
  }
  getCustomerList(): Observable<Customer[]> {

    return this._http.get<Customer[]>("https://localhost:7268/api/Customers");
  }

  addNewCustomer(customer: Customer): Observable<Customer> {

    return this._http.post<Customer>("https://localhost:7268/api/Customers",customer);
  }
  
  updateCustomer(customer:Customer): Observable<Customer>{
    let index = this.customerList.indexOf(customer);
    return this._http.put<Customer>("https://localhost:7268/api/Customers"+index,customer);
  }
  deleteCustomer(customer:Customer){
    let index = this.customerList.indexOf(customer);
    this._http.delete<Customer>("https://localhost:7268/api/Customers"+index);
>>>>>>> origin/master
  }
}
