import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
