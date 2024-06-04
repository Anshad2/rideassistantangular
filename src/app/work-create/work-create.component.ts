import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-create',
  templateUrl: './work-create.component.html',
  styleUrls: ['./work-create.component.css']
})
export class WorkCreateComponent {

  @Input() custId:any
  constructor(){
    console.log(this.custId);
    
  }

  



}
