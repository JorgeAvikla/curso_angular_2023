import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'basic', component: BasicPageComponent},
      {path: 'dynamic', component: DynamicComponent},
      {path: 'switches', component: SwitchesComponent},
      {path: '**', redirectTo: 'basic'},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
