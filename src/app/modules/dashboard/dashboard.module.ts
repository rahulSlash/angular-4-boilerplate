import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './../../routing/app.routing';
import { AppConstantsModule } from './../../app.constants';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { SharedModule } from '../shared/shared.module';

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
