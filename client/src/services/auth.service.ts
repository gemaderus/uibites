import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs';
//import { HttpHeaders } from '@angular/common/http';
// import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const BASEURL = "http://localhost:3000/api/auth";

@Injectable()
export class AuthService {

  private user:object;
  private options = {withCredentials:true};

  constructor(private http: Http) {
    console.log('authService');
  }

  public getUser() {
    let promise = new Promise((resolve, reject) => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        reject();
      }

      const headers: Headers = new Headers();
      headers.append('Authorization', token);
      const requestOptions: RequestOptions = new RequestOptions();
      requestOptions.headers = headers;

      if (this.user == null) {
        this.http.get(`${BASEURL}/me`, requestOptions)
        .map(res => res.json())
        .subscribe(
          data => {
            console.log(data)
            this.user = data.user;
            resolve(data.user);
          },
          error => reject(error)
        );
      } else {
        resolve(this.user);
      }
    });
    return promise;
  }

  private handleError(e) {
    return Observable.throw(e.json());
  }

  signup(username,password, name, email, bio) {
    console.log("entro en el signup del servicio")
    const request =   this.http.post(`${BASEURL}/signup`, {username,password, name, email, bio})
      .map(res => res.json());
    request
      .subscribe(
          // We're assuming the response will be an object
          // with the JWT on an id_token key
        data => {
          localStorage.setItem('auth_token', data.token);
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
          localStorage.setItem('auth_token', data.token);
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
