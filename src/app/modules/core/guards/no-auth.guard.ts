import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  private check(): Observable<boolean> {
    return this.authService.isLoggedIn()
      .map((isLoggedIn: boolean) => !isLoggedIn);
  }

  canActivate(): Observable<boolean> {
    return this.check()
      .do((isNotLoggedIn: boolean) => {
        if (!isNotLoggedIn) {
          this.router.navigate(['/dashboard']);
        }
      });
  }

  canLoad(): Observable<boolean> {
    return this.check();
  }
}
