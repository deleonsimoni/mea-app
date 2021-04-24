import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'midia' },
  {
    path: 'curriculum',
    loadChildren: './curriculum/curriculum.module#CurriculumModule'
  },
  {
    path: 'lives',
    loadChildren: './lives-edit/lives-edit.module#LivesEditModule'
  },
  {
    path: 'midia',
    loadChildren: './media/media.module#MediaModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
