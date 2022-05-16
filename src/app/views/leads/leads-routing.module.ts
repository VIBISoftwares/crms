import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { ManagementComponent } from './management/management.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { TransferComponent } from './transfer/transfer.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'leads',
    },
    children: [
      {
        path: '',
        redirectTo: 'create',
      },
      {
        path: 'create',
        component: CreateComponent,
        data: {
          title: 'Company Contact',
        },
      },
      {
        path: 'management',
        component: ManagementComponent,
        data: {
          title: 'Management',
        },
      },
      {
        path: 'documents',
        component: DocumentsComponent,
        data: {
          title: 'Documents',
        },
      },
      {
        path: 'profiles',
        component: ProfileComponent,
        data: {
          title: 'Profiles',
        },
      },
      {
        path: 'transfer',
        component: TransferComponent,
        data: {
          title: 'transfer',
        },
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
