import { Component } from '@angular/core';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn:boolean=false

  constructor(private service:RideService){
    this.service.loggedInSubject.subscribe((data:any)=>this.isLoggedIn=data)
  }

}
