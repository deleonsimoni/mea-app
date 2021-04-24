import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lives' },
  {
    path: 'curriculum',
    loadChildren: './curriculum/curriculum.module#CurriculumModule'
  },
  {
    path: 'lives',
    loadChildren: './lives-edit/lives-edit.module#LivesEditModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
