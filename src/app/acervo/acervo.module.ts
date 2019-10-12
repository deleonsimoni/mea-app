import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AcervoRoutingModule } from './acervo-routing.module';
import { AcervoComponent } from './acervo.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AcervoRoutingModule],
  declarations: [AcervoComponent]
})
export class AcervoModule {
}
