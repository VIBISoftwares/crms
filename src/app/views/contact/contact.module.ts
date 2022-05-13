import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { CustomerContactComponent } from './customer-contact/customer-contact.component';
import { CompanyContactComponent } from './company-contact/company-contact.component';


@NgModule({
  declarations: [
    CustomerContactComponent,
    CompanyContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
