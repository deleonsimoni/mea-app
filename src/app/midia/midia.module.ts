import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MidiaRoutingModule } from './midia-routing.module';
import { MidiaComponent } from './midia.component';

@NgModule({
  imports: [CommonModule, TranslateModule, MidiaRoutingModule],
  declarations: [MidiaComponent]
})
export class MidiaModule {}
