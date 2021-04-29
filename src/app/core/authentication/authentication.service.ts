import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '@app/enums/api.enum';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Credentials, CredentialsService } from './credentials.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private api: string = `${
    environment.production ? Api.PROD : Api.DEV
  }/api/auth/login`;

  constructor(
    private credentialsService: CredentialsService,
    private httpClient: HttpClient
  ) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: any): Observable<Credentials> {
    return this.httpClient.post(this.api, context).pipe(
      map((res: any) => {
        this.credentialsService.setCredentials(res);
      })
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    this.credentialsService.setCredentials();
    return of(true);
  }
}
