import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedGuidelinesComponent } from './completed-guidelines.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponentsModule } from '@app/shared/components/custom-components.module';

const routes: Routes = [{ path: '', component: CompletedGuidelinesComponent }];

@NgModule({
  declarations: [CompletedGuidelinesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomComponentsModule
  ],
  exports: [CompletedGuidelinesComponent]
})
export class CompletedGuidelinesModule {}
