import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchProjectsComponent } from './research-projects.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponentsModule } from '@app/shared/components/custom-components.module';
import { NgxLoadingModule } from 'ngx-loading';

const routes: Routes = [{ path: '', component: ResearchProjectsComponent }];

@NgModule({
  declarations: [ResearchProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomComponentsModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [ResearchProjectsComponent]
})
export class ResearchProjectsModule {}
