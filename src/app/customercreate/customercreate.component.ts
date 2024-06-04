import { Component } from '@angular/core';

import { FormControl,FormGroup, Validators } from '@angular/forms';
import { RideService } from '../services/ride.service';
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-customercreate',
  templateUrl: './customercreate.component.html',
  styleUrls: ['./customercreate.component.css']
})
export class CustomercreateComponent {

  custId:any
  isEdit:boolean=false

  constructor(private service:RideService,private route:Router,private router:ActivatedRoute){

    this.custId=this.router.snapshot.queryParams["custid"]

    if(this.custId){
      this.isEdit=true
      // console.log(this.isEdit);
      this.initializeForm()
      this.service.isAuthenticated()
      
    }
    
  }

  initializeForm(){
    this.service.retrieveCustomer(this.custId).subscribe(data=>{
      this.customerForm.patchValue(data)
    })
  }

  customerForm=new FormGroup({

    name :new FormControl("",Validators.required),
    phone : new FormControl("",Validators.required),
    email : new FormControl("",Validators.required),
    "vehicle_no" : new FormControl("",Validators.required),
    "running_km" : new FormControl("",Validators.required)
  })

  handleSubmit(){

    let formData=this.customerForm.value

    if (this.isEdit){
 

      //edit logic
      this.service.updateCustomer(this.custId,formData).subscribe(data=>{
        this.route.navigateByUrl("customers")
      })

    }
    else{

      // console.log(formData);

      // logic for creating
  
      this.service.createCustomer(formData).subscribe((data:any)=>{
      this.route.navigateByUrl(`worksummary/${data.id}`)
    })

  

    
  }

}
}
