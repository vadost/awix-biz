import { Injectable } from '@angular/core';
import { BaseApiService } from './base.api.service';


@Injectable()
export class AuthApiService {

    constructor(private baseApiService: BaseApiService) {}

    signUp(email: string, password: string) {

        return this.baseApiService.post('/api/signup', {email, password});
    }
}
