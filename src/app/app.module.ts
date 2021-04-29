import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { ShellModule } from './shell/shell.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { GoogleAnalyticsService } from './service/google-analytics.service';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LivesModalComponent } from './modals/lives-modal/lives-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { NgxLoadingModule } from 'ngx-loading';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { RequestInterceptor } from './core/http/request-interceptor.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    MatButtonModule,
    MatSnackBarModule,
    NoopAnimationsModule,
    LoginModule,
    ModalModule.forRoot(),
    DashboardModule,
    NgxLoadingModule.forRoot({}),
    MatTabsModule,
    ToastrModule.forRoot(),
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  entryComponents: [LivesModalComponent],
  declarations: [AppComponent, LivesModalComponent],
  providers: [
    BsModalRef,
    GoogleAnalyticsService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
