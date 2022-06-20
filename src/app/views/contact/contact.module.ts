import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonModule, CardModule, FormModule, GridModule, CollapseModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ContactRoutingModule } from './contact-routing.module';
import { CustomerContactComponent } from './customer-contact/customer-contact.component';
import { CompanyContactComponent } from './company-contact/company-contact.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DataTablesModule } from 'angular-datatables';
// Timepicker
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

// Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Global } from '../../global/global';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    CustomerContactComponent,
    CompanyContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    CardModule,
    CollapseModule,
    GridModule,
    IconModule,
    ButtonModule,
    FormModule,
    PaginationModule,
    DataTablesModule,OverlayModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers:[Global]
})
export class ContactModule { }
