import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FollowupRoutingModule } from './followup-routing.module';
import { FollowupComponent } from './followup.component';
// Timepicker
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
// Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import {
  CalloutModule,
  CardModule,
  GridModule,
  ProgressModule,
  ButtonModule,
  DropdownModule,
  ChartModule,
  SharedModule,
  WidgetModule
} from '@coreui/angular';


@NgModule({
  declarations: [
    FollowupComponent
  ],
  imports: [
    FollowupRoutingModule,
    CommonModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(), 
    FormsModule,
    CardModule,
    GridModule,
    ButtonModule,
  ]
})
export class FollowupModule { }
