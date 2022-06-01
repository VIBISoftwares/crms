import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowupComponent } from './followup.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Follow-up',
    },
    children: [
      {
        path: '',
        redirectTo: 'followup',
      },
      {
        path: 'followup',
        component: FollowupComponent,
        data: {
          title: '',
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowupRoutingModule { }
