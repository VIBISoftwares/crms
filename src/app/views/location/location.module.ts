import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { AreaComponent } from './area/area.component';


@NgModule({
  declarations: [
    CountryComponent,
    StateComponent,
    AreaComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
