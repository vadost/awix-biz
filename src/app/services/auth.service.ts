import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthApiService } from './api/auth.api.service';

export const ANONYMOUS_USER: User = {
    id: undefined,
    email: ''
};

@Injectable()
export class AuthService {
    private subjectUser = new BehaviorSubject<User>(ANONYMOUS_USER);
    user$: Observable<User> = this.subjectUser.asObservable();
    isLoggedIn$: Observable<boolean> = this.user$.map(user => !!user.id);
    isLoggedOut$: Observable<boolean> = this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);

    constructor(private authApiService: AuthApiService) {


    }

    signUp(email: string, password: string) {

        return this.authApiService.signUp(email, password)
            .shareReplay()
            .do(user => this.subjectUser.next(user));
    }

}
