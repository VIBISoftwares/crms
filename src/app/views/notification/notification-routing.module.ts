import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ManagementComponent } from './management/management.component';
import { HolidaysComponent } from './holidays/holidays.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Notification',
    },
    children: [
      {
        path: '',
        redirectTo: 'create',
      },
      {
        path: 'create',
        component: CreateComponent,
        data: {
          title: 'Create Notification',
        },
      },
      {
        path: 'management',
        component: ManagementComponent,
        data: {
          title: 'Management',
        },
      },     
      {
        path: 'holidays',
        component: HolidaysComponent,
        data: {
          title: 'Holidays',
        },
      },     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
