import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivesEditComponent } from './lives-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from '@app/shared/components/custom-components.module';
import { NgxLoadingModule } from 'ngx-loading';

const routes: Routes = [{ path: '', component: LivesEditComponent }];

@NgModule({
  declarations: [LivesEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CustomComponentsModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [LivesEditComponent, RouterModule]
})
export class LivesEditModule {}
