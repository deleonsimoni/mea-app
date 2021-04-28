import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponentsModule } from '@app/shared/components/custom-components.module';
import { NgxLoadingModule } from 'ngx-loading';

const routes: Routes = [{ path: '', component: MediaComponent }];

@NgModule({
  declarations: [MediaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomComponentsModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [MediaComponent, RouterModule]
})
export class MediaModule {}
