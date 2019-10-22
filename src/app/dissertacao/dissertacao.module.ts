import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DissertacaoRoutingModule } from './dissertacao-routing.module';
import { DissertacaoComponent } from './dissertacao.component';

@NgModule({
  imports: [CommonModule, TranslateModule, DissertacaoRoutingModule],
  declarations: [DissertacaoComponent]
})
export class DissertacaoModule {}
