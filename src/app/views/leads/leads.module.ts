import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { CreateComponent } from './create/create.component';
import { ManagementComponent } from './management/management.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { TransferComponent } from './transfer/transfer.component';


@NgModule({
  declarations: [
    CreateComponent,
    ManagementComponent,
    DocumentsComponent,
    ProfileComponent,
    TransferComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule
  ]
})
export class LeadsModule { }
