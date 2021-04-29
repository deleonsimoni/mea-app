import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Logger } from '../logger.service';
import { CredentialsService } from './credentials.service';

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private credentialsService: CredentialsService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (state.url.includes('admin')) {
      if (this.credentialsService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/login'], {
          queryParams: { redirect: state.url },
          replaceUrl: true
        });
        return false;
      }
    } else {
      return true;
    }
  }
}
