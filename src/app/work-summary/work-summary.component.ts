import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-summary',
  templateUrl: './work-summary.component.html',
  styleUrls: ['./work-summary.component.css']
})
export class WorkSummaryComponent {
  custId :any
  constructor(private route:ActivatedRoute){

    this.custId=this.route.snapshot.params["id"]
    console.log(this.custId);
    
  }

}
