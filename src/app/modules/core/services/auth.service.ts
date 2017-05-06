import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  isLoggedIn(): Observable<boolean> {
    return Observable.of(false);
  }

  signIn(phone: string, password: string): Observable<boolean> {
    return Observable.of(false);
  }

  signUp() {
  }

  logout(): void {
  }
}
