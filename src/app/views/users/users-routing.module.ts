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
        path: 'change-password',
        component: ChangePasswordComponent,
        data: {
          title: 'Change Password',
        },
      },     
      {
        path: 'system-config',
        component: SystemConfigComponent,
        data: {
          title: 'System Config',
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
