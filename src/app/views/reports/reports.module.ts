import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonModule, CardModule, FormModule, GridModule, CollapseModule,ModalModule,SwitchModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

// Timepicker
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

// Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { Global } from '../../global/global';
import { OverlayModule } from '@angular/cdk/overlay';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DataTablesModule } from 'angular-datatables';

import { ReportsRoutingModule } from './reports-routing.module';
import { DailyLeadsComponent } from './daily-leads/daily-leads.component';
import { DailyFollowupsComponent } from './daily-followups/daily-followups.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { EmployeePerformanceComponent } from './employee-performance/employee-performance.component';


@NgModule({
  declarations: [
    DailyLeadsComponent,
    DailyFollowupsComponent,
    AppoinmentsComponent,
    EmployeePerformanceComponent

  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
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
export class ReportsModule { }
