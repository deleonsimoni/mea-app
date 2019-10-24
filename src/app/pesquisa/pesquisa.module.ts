import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PesquisaComponent } from './pesquisa.component';

@NgModule({
  imports: [CommonModule, TranslateModule, PesquisaRoutingModule],
  declarations: [PesquisaComponent]
})
export class PesquisaModule {}
