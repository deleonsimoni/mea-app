import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponentsModule } from '@app/shared/components/custom-components.module';
import { NgxLoadingModule } from 'ngx-loading';

const routes: Routes = [{ path: '', component: BooksComponent }];

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomComponentsModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [BooksComponent]
})
export class BooksModule {}
