import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateComponent } from './create/create.component';
import { ManagementComponent } from './management/management.component';
import { RightsComponent } from './rights/rights.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SystemConfigComponent } from './system-config/system-config.component';


@NgModule({
  declarations: [
    CreateComponent,
    ManagementComponent,
    RightsComponent,
    ChangePasswordComponent,
    SystemConfigComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
