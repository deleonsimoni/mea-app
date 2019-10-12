import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AgendaRoutingModule],
  declarations: [AgendaComponent]
})
export class AgendaModule {
}
