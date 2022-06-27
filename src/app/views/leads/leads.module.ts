import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonModule, CardModule, FormModule, GridModule, CollapseModule,ModalModule,SwitchModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { LeadsRoutingModule } from './leads-routing.module';
import { CreateComponent } from './create/create.component';
import { ManagementComponent } from './management/management.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { TransferComponent } from './transfer/transfer.component';
// Timepicker
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

// Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { Global } from '../../global/global';
import { OverlayModule } from '@angular/cdk/overlay';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DataTablesModule } from 'angular-datatables';


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
    LeadsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    CardModule,
    CollapseModule,
    GridModule,
    IconModule,
    SwitchModule,
    ModalModule,
    ButtonModule,PaginationModule,DataTablesModule,
    FormModule,OverlayModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers:[Global]
})
export class LeadsModule { }
