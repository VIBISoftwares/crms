
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonModule, CardModule, FormModule, GridModule, CollapseModule,ModalModule,SwitchModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { EscalationRoutingModule } from './escalation-routing.module';
import { EscalationComponent } from './escalation.component';
// Timepicker
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

// Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { Global } from '../../global/global';
import { OverlayModule } from '@angular/cdk/overlay';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    EscalationComponent,
  ],
  imports: [
    CommonModule,
    EscalationRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    CardModule,
    CollapseModule,
    GridModule,
    IconModule,
    SwitchModule,
    ModalModule,
    ButtonModule,PaginationModule,DataTablesModule,
    FormModule,OverlayModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers:[Global]
})
export class EscalationModule { }
