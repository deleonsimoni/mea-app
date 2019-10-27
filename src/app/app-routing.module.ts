import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'curriculo', loadChildren: './about/about.module#AboutModule' },
    { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule' },
    { path: 'midia', loadChildren: './midia/midia.module#MidiaModule' },
    { path: 'livros', loadChildren: './acervo/acervo.module#AcervoModule' },
    { path: 'gpdoc', loadChildren: './gpdoc/gpdoc.module#GpdocModule' },
    {
      path: 'entrevistas',
      loadChildren: './entrevista/entrevista.module#EntrevistaModule'
    },
    { path: 'artigos', loadChildren: './artigos/artigos.module#ArtigosModule' },
    {
      path: 'ProjetosPesquisa',
      loadChildren: './pesquisa/pesquisa.module#PesquisaModule'
    },
    {
      path: 'OrientacoesConcluidas',
      loadChildren: './dissertacao/dissertacao.module#DissertacaoModule'
    }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
