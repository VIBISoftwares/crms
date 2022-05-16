import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ManagementComponent } from './management/management.component';
import { RightsComponent } from './rights/rights.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SystemConfigComponent } from './system-config/system-config.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users',
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
          title: 'Create Users',
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
        path: 'user-rights',
        component: RightsComponent,
        data: {
          title: 'User Rights',
        },
      },     
      {
        path: 'holidays',
        component: ChangePasswordComponent,
        data: {
          title: 'Holidays',
        },
      },     
      {
        path: 'holidays',
        component: SystemConfigComponent,
        data: {
          title: 'SystemConfigComponent',
        },
      },     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
