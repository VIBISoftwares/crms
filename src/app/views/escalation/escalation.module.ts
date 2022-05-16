import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscalationRoutingModule } from './escalation-routing.module';
import { EscalationComponent } from './escalation.component';


@NgModule({
  declarations: [
    EscalationComponent
  ],
  imports: [
    CommonModule,
    EscalationRoutingModule
  ]
})
export class EscalationModule { }
