import { CalendarModule } from './calendar/calendar.module';
import { OperatorDashboardComponent } from './operator-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //component: OperatorDashboardComponent,
    data: {
      title: 'Dashboard',
    },
    children: [
      {
        path: '',
        redirectTo: 'main',
      },
      {
        path: 'main',
        loadChildren: () =>
          import('./main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'tours',
        loadChildren: () =>
          import('./tours/tours.module').then((m) => m.ToursModule),
      },
      {
        path: 'add-tour',
        loadChildren: () =>
          import('./add-tour/add-tour.module').then((m) => m.AddTourModule),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./calendar/calendar.module').then((m) => m.CalendarModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorDashboardRoutingModule {}
