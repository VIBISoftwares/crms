import { CollapsesComponent } from './../base/collapses/collapses.component';
import { CommonModule } from '@angular/common';
import { OperatorDashboardRoutingModule } from './operator-dashboard-routing.module';
import { OperatorDashboardComponent } from './operator-dashboard.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CalloutModule,
  CardModule,
  GridModule,
  ProgressModule,
  ButtonModule,
  DropdownModule,
  ChartModule,
  SharedModule,
  WidgetModule,
  ImgModule,
  BadgeModule,
  FormModule,
  SwitchModule,
  CollapseModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { WidgetsModule } from '../widgets/widgets.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AddTourComponent } from './add-tour/add-tour.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddTravllersComponent } from './add-travllers/add-travllers.component';
import { AddItineraryComponent } from './add-itinerary/add-itinerary.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OperatorDashboardRoutingModule,
    // ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    CalloutModule,
    CardModule,
    GridModule,
    IconModule,
    ProgressModule,
    ButtonModule,
    DropdownModule,
    ChartModule,
    SharedModule,
    WidgetModule,
    WidgetsModule,
    ImgModule,
    CommonModule,
    BadgeModule,
    FormModule,
    SwitchModule,
    CollapseModule,
  ],
  declarations: [
    OperatorDashboardComponent,
    AddTourComponent,
    AddGroupComponent,
    AddTravllersComponent,
    AddItineraryComponent,
  ],
})
export class OperatorDashboardModule {}
