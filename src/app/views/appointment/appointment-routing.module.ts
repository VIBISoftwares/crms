import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Appointment',
    },
    children: [
      {
        path: '',
        redirectTo: 'appoinment',
      },
      {
        path: 'appoinment',
        component: AppointmentComponent,
        data: {
          title: '',
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
