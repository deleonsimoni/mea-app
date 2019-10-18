import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MidiaRoutingModule } from './midia-routing.module';
import { MidiaComponent } from './midia.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { ngtweet } from 'ngtweet';

@NgModule({
  imports: [CommonModule, TranslateModule, MidiaRoutingModule, NgxTwitterTimelineModule],
  declarations: [MidiaComponent]
})
export class MidiaModule { }
