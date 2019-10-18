import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { extract } from '@app/core';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: AboutComponent, data: { title: extract('Biografia') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
