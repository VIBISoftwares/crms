import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { RaiseComponent } from './raise/raise.component';
import { AssignComponent } from './assign/assign.component';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    RaiseComponent,
    AssignComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule { }
