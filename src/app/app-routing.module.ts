import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomercreateComponent } from './customercreate/customercreate.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';

const routes: Routes = [
 {path:"",component:CustomerlistComponent},
 {path:"customer/add",component:CustomercreateComponent},
 {path:"customer/:id",component:CustomerdetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
