import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsService } from '../authentication/credentials.service';

/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {
  constructor(private readonly credentialsService: CredentialsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.credentialsService.isAuthenticated()) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          `Bearer ${this.credentialsService.credentials.token}`
        )
      });
    }

    return next.handle(request);
  }
}
