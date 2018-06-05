import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt';
import { WebApi } from '../app.config';
import { Result } from '../models/result';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
@Injectable()
export class TicketsService {
    constructor(
        private http: AuthHttp
    ) {  }

    getAllTickets(region: string): Promise<Result> {
        let URL = WebApi + "ticket/GetAllTickets?region = " + region;

        return this.http.get(URL, {}) //headers: headers
            .toPromise()
            .then(res => <Result>res.json())
            .then(data => {
                return data;
            })
            .catch(this.handleError);
    }

    public mapResponse(response: Response) {
        return response.json();
    }

    public handleError(error: any): Promise<any> | any {
        if (error.message === 'No JWT present or has expired') {
            console.log('An error occurred', error);
            return Promise.reject(error.message || error);
        }

        console.log('An error occurred', error);
        alert('An error occurred\n' + error);
        return Promise.reject(error.message || error);
    }

}