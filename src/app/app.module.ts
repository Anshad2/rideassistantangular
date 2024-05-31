import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomercreateComponent } from './customercreate/customercreate.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    CustomercreateComponent,
    CustomerdetailsComponent
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
