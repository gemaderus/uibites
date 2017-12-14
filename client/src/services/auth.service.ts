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
  private options = {withCredentials: true};
  private fetching:boolean;
  private promise;

  constructor(private http: Http) {
    console.log('authService');
    this.fetching = false;
  }

  public getUser() {
    console.log("[getUser]");

    if (this.fetching) {
      return this.promise;
    }

    this.promise = new Promise((resolve, reject) => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        reject();
      }

      const headers: Headers = new Headers();
      headers.append('Authorization', token);
      const requestOptions: RequestOptions = new RequestOptions();
      requestOptions.headers = headers;

      if (this.user == null) {
        console.log("[getUser] user null", this.user);
        this.fetching = true;

        this.http.post(`${BASEURL}/me`, {}, requestOptions)
        .map(res => res.json())
        .subscribe(
          data => {
            console.log("DATA", data)
            this.user = data.user;
            this.fetching = false;
            console.log("USER SERVICE", this.user)
            resolve(data.user);
          },
          error => {
            this.fetching = false;
            reject(error);
          }
        );
      } else {
        console.log("[getUser] user not null", this.user);
        this.fetching = false;
        resolve(this.user);
      }
    });

    return this.promise;
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
    console.log(this.user)
  }
}
