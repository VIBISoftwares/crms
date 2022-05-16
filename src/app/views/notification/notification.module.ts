import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { CreateComponent } from './create/create.component';
import { ManagementComponent } from './management/management.component';
import { HolidaysComponent } from './holidays/holidays.component';


@NgModule({
  declarations: [
    CreateComponent,
    ManagementComponent,
    HolidaysComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
