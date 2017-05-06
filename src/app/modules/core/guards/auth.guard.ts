import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  private check(): Observable<boolean> {
    return this.authService.isLoggedIn();
  }

  canActivate(): Observable<boolean> {
    return this.check()
      .do((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/signin']);
        }
      });
  }

  canLoad(): Observable<boolean> {
    return this.check();
  }
}
