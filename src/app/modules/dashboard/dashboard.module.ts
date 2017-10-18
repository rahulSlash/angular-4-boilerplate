import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Routing
import { DashboardRoutingModule } from './../../routing/app.routing';
//Accessing constants
import { AppConstantsModule } from './../../app.constants';
//Http Requests
import { HttpClient } from './../../models/http.client';
//Modules
import { SharedModule } from '../shared/shared.module';
//Components
import { HomeComponent } from '../../components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
   HomeComponent
  ]
})
export class DashboardModule { }
