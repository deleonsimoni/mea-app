import { Observable, of } from 'rxjs';

import { LoginContext } from './authentication.service';

export class MockAuthenticationService {
  credentials = {
    username: 'test',
    token: '123'
  };

  login(context: LoginContext): Observable<any> {
    return of({
      username: context.username,
      token: '123456'
    });
  }

  logout(): Observable<boolean> {
    this.credentials = null;
    return of(true);
  }
}
