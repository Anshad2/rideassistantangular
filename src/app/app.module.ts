import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomercreateComponent } from './customercreate/customercreate.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkSummaryComponent } from './work-summary/work-summary.component';
import { WorkCreateComponent } from './work-create/work-create.component';
import { WorkListComponent } from './work-list/work-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    CustomercreateComponent,
    CustomerdetailsComponent,
    LoginComponent,
    NavbarComponent,
    WorkSummaryComponent,
    WorkCreateComponent,
    WorkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
