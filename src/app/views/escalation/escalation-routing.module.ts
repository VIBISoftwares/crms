import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscalationComponent } from './escalation.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Escalation',
    },
    children: [
      {
        path: '',
        redirectTo: 'escalation',
      },
      {
        path: 'escalation',
        component: EscalationComponent,
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
export class EscalationRoutingModule { }
