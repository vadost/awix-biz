import { Injectable } from '@angular/core';
import { Headers, URLSearchParams, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseApiService {
    // Create headers
    headers = new Headers({'Content-Type': 'application/json'});
    options = new RequestOptions({
        headers: this.headers,
        withCredentials: true
    });
    private baseUrl: string;

    constructor(private http: Http) {}

    get(url: string, params: URLSearchParams | string = ''): Observable<any> {
        const options = new RequestOptions({
            withCredentials: true,
            search: params,
        });

        return this.http.get(this.baseUrl + url, options);
    }

    post(url: string, body: any): Observable<any> {

        return this.http.post(this.baseUrl + url, JSON.stringify(body), this.options);
    }

    put(url: string, body: string): Observable<any> {
        return this.http.put(this.baseUrl + url, body, this.options);
    }

    del(url: string) {
        return this.http.delete(this.baseUrl + url, this.options);
    }
}
