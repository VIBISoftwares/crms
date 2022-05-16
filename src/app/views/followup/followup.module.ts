import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowupRoutingModule } from './followup-routing.module';
import { FollowupComponent } from './followup.component';


@NgModule({
  declarations: [
    FollowupComponent
  ],
  imports: [
    CommonModule,
    FollowupRoutingModule
  ]
})
export class FollowupModule { }
