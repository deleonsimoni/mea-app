import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'biografia', loadChildren: './about/about.module#AboutModule' },
    { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule' },
    { path: 'midia', loadChildren: './midia/midia.module#MidiaModule' },
    { path: 'acervo', loadChildren: './acervo/acervo.module#AcervoModule' }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
