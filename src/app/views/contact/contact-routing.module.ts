import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyContactComponent } from './company-contact/company-contact.component';
import { CustomerContactComponent } from './customer-contact/customer-contact.component'; 

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'contact',
    },
    children: [
      {
        path: '',
        redirectTo: 'company-contact',
      },
      {
        path: 'company-contact',
        component: CompanyContactComponent,
        data: {
          title: 'Company Contact',
        },
      },
      {
        path: 'client-contact',
        component: CustomerContactComponent,
        data: {
          title: 'Client Contact',
        },
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
