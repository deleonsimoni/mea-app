import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LivesRoutingModule } from './lives-routing.module';
import { LivesComponent } from './lives.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LivesRoutingModule,
    NgxTwitterTimelineModule
  ],
  declarations: [LivesComponent, JwPaginationComponent]
})
export class LivesModule {}
