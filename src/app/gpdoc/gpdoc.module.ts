import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { GpdocRoutingModule } from './gpdoc-routing.module';
import { GpdocComponent } from './gpdoc.component';

@NgModule({
  imports: [CommonModule, TranslateModule, GpdocRoutingModule],
  declarations: [GpdocComponent]
})
export class GpdocModule {}
