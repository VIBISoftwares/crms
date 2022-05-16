import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaiseComponent } from './raise/raise.component';
import { AssignComponent } from './assign/assign.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tickets',
    },
    children: [
      {
        path: '',
        redirectTo: 'raise',
      },
      {
        path: 'raise',
        component: RaiseComponent,
        data: {
          title: 'Raise Tickets',
        },
      },
      {
        path: 'assign',
        component: AssignComponent,
        data: {
          title: 'Assign Ticket',
        },
      },
      {
        path: 'status',
        component: StatusComponent,
        data: {
          title: 'Status Ticket',
        },
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
