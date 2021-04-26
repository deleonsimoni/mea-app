import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'curriculo', loadChildren: './about/about.module#AboutModule' },
    { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule' },
    { path: 'midia', loadChildren: './midia/midia.module#MidiaModule' },
    { path: 'lives', loadChildren: './lives/lives.module#LivesModule' },

    { path: 'livros', loadChildren: './acervo/acervo.module#AcervoModule' },
    { path: 'gpdoc', loadChildren: './gpdoc/gpdoc.module#GpdocModule' },
    {
      path: 'projetos-pesquisa',
      loadChildren: './pesquisa/pesquisa.module#PesquisaModule'
    },
    {
      path: 'orientacoes-concluidas',
      loadChildren: './dissertacao/dissertacao.module#DissertacaoModule'
    },
    {
      path: 'admin',
      loadChildren: './admin/admin-routing.module#AdminRoutingModule'
    }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
