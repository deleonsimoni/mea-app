import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EntrevistaRoutingModule } from './entrevista-routing.module';
import { EntrevistaComponent } from './entrevista.component';

@NgModule({
  imports: [CommonModule, TranslateModule, EntrevistaRoutingModule],
  declarations: [EntrevistaComponent]
})
export class EntrevistaModule {}
