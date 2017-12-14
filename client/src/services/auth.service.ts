import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';

import { environment }  from '../environments/environment';

const  NEWBASEURL = environment.BASE_URL;
const BASEURL = `${NEWBASEURL}/api/auth`;

@Injectable()
export class AuthService {

  private user;
  private options = {withCredentials: true};

  constructor(private http: Http) {
    this.user = null;
  }

  public getUser() {
    const token = localStorage.getItem('auth_token');

    if (!token) {
      return null;
    }

    if (this.user != null) {
      return Observable.of({
        user: this.user
      });
    }

    const headers: Headers = new Headers();
    headers.append('Authorization', token);
    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = headers;

    const request = this.http.post(`${BASEURL}/me`, {}, requestOptions)
      .map(res => res.json());
    request
      .subscribe(
        data => {
          this.user = data.user;
        },
        error => console.log(error)
      );

    return request;
  }

  private handleError(e) {
    return Observable.throw(e.json());
  }

  signup(credentials) {
    console.log("entro en el signup del servicio")
    const request = this.http.post(`${BASEURL}/signup`, {credentials})
      .map(res => res.json());
    request
      .subscribe(
          // We're assuming the response will be an object
          // with the JWT on an id_token key
        data => {
          this.user = data.user;
        },
        error => console.log(error)
      );
    return request;
  }

  login(credentials) {
    const request = this.http.post(`${BASEURL}/login`, credentials)
      .map(res => res.json());

    request
      .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data => {
          this.user = data.user;
        },
        error => console.log(error)
      );

    return request;
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.user = null;
  }
}
