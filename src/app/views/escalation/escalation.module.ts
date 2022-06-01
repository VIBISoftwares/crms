import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EscalationRoutingModule } from './escalation-routing.module';
import { EscalationComponent } from './escalation.component';

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
    EscalationComponent
  ],
  imports: [
    CommonModule,
    EscalationRoutingModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(), 
    FormsModule,
    CardModule,
    GridModule,
    ButtonModule,
  ]
})
export class EscalationModule { }
