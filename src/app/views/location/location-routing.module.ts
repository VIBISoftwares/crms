import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { AreaComponent } from './area/area.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'location',
    },
    children: [
      {
        path: '',
        redirectTo: 'create',
      },
      {
        path: 'country',
        component: CountryComponent,
        data: {
          title: 'Country',
        },
      },
      {
        path: 'state',
        component: StateComponent,
        data: {
          title: 'State',
        },
      },     
      {
        path: 'area',
        component: AreaComponent,
        data: {
          title: 'Area',
        },
      },          
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
