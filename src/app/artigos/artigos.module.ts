import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ArtigosRoutingModule } from './artigos-routing.module';
import { ArtigosComponent } from './artigos.component';

@NgModule({
  imports: [CommonModule, TranslateModule, ArtigosRoutingModule],
  declarations: [ArtigosComponent]
})
export class ArtigosModule {}
