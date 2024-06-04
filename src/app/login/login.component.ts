import { Component } from '@angular/core';

import {FormControl,FormGroup,Validators} from '@angular/forms'
import { RideService } from '../services/ride.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({

    "username" : new FormControl("",Validators.required),

    "password" : new FormControl("",Validators.required)
  })

  constructor(private service:RideService,private route:Router){

    

  }

  handleSubmit(){

    let formData=this.loginForm.value
    // console.log(formData);


    //callback(success,error,compleet)
    //success
    this.service.getTokenPair(formData).subscribe((data:any)=>{
      // console.log(data);
      localStorage.setItem("refresh",data.refresh)
      localStorage.setItem("access",data.access)
      this.service.isAuthenticated()
      this.route.navigateByUrl("customers")
    },
    //error
    (error:any)=>{
      alert("failed to login")
    }

  )
  }

}
 