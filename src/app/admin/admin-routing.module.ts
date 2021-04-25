import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'orientacoes-concluidas' },
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
  },
  {
    path: 'projetos-pesquisa',
    loadChildren:
      './research-projects/research-projects.module#ResearchProjectsModule'
  },
  {
    path: 'orientacoes-concluidas',
    loadChildren:
      './completed-guidelines/completed-guidelines.module#CompletedGuidelinesModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
