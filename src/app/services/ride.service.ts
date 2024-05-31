import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor(private http:HttpClient) { }

  getCustomers(){
    return this.http.get("http://127.0.0.1:8000/api/customers/")
  }
  
  retrieveCustomer(id:any){
    return this.http.get(`http://127.0.0.1:8000/api/customers/${id}`)
  }

  createCustomer(data:any){
    return this.http.post("http://127.0.0.1:8000/api/customers/", data)
  }

  updateCustomer(id:any, data:any){
    return this.http.put(`http://127.0.0.1:8000/api/customers/${id}`, data)
  }

  deleteCustomer(id:any){
    return this.http.delete(`http://127.0.0.1:8000/api/customers/${id}`)
  }

}


