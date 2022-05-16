import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ManagementComponent } from './management/management.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Product',
    },
    children: [
      {
        path: '',
        redirectTo: 'add',
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Create Product',
        },
      },
      {
        path: 'management',
        component: ManagementComponent,
        data: {
          title: 'Management',
        },
      },     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
