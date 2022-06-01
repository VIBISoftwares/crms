import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyLeadsComponent } from './daily-leads/daily-leads.component';
import { DailyFollowupsComponent } from './daily-followups/daily-followups.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { EmployeePerformanceComponent } from './employee-performance/employee-performance.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reports',
    },
    children: [
      {
        path: '',
        redirectTo: 'daily-leads',
      },
      {
        path: 'daily-leads',
        component: DailyLeadsComponent,
        data: {
          title: 'Daily-Leads',
        },
      },
      {
        path: 'daily-followups',
        component: DailyFollowupsComponent,
        data: {
          title: 'Daily-Followups',
        },
      },     
      {
        path: 'appoinments',
        component: AppoinmentsComponent,
        data: {
          title: 'Appoinments',
        },
      },   
      {
        path: 'employee-performance',
        component: EmployeePerformanceComponent,
        data: {
          title: 'Employee-Performance',
        },
      },          
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
