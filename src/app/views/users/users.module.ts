import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonModule, CardModule, FormModule, GridModule, CollapseModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { UsersRoutingModule } from './users-routing.module';
import { CreateComponent } from './create/create.component';
import { ManagementComponent } from './management/management.component';
import { RightsComponent } from './rights/rights.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SystemConfigComponent } from './system-config/system-config.component';

// Timepicker
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

// Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
    UsersRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    CardModule,
    CollapseModule,
    GridModule,
    IconModule,
    ButtonModule,
    FormModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ]
})
export class UsersModule { }
