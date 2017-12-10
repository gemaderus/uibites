import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {BASE_URL} from '../app/helpers';

@Injectable()
export class CardsService {
  card:any;

  constructor(private http: Http) {}

  getList(): Observable<any> {
    const token = localStorage.getItem('auth_token');
    const headers: Headers = new Headers();
    headers.append('Authorization', token);
    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = headers;

    return this.http.get(`${BASE_URL}/dashboard/cards`, requestOptions)
      .map(res => res.json());
  }

  getCardByID(id):Observable<any>{
    return this.http.get(`${BASE_URL}/dashboard/card/${id}`)
      .map(res => res.json());
  }

  editCard(id, card) {
    const token = localStorage.getItem('auth_token');
    const headers: Headers = new Headers();
    headers.append('Authorization', token);
    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = headers;
    return this.http.put(`${BASE_URL}/dashboard/card/${id}`, card, requestOptions)
      .map((res) => res.json());
  }

  deleteCard(id) {
    const token = localStorage.getItem('auth_token');
    const headers: Headers = new Headers();
    headers.append('Authorization', token);
    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = headers;

    return this.http.delete(`${BASE_URL}/dashboard/card/${id}`, requestOptions)
      .map(res => res.json());
  }

  saveComment(id, comment) {
    const token = localStorage.getItem('auth_token');
    const headers: Headers = new Headers();
    headers.append('Authorization', token);
    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = headers;

    const data = {
      text: comment
    }

    return this.http.post(`${BASE_URL}/comments/card/${id}`, data, requestOptions)
      .map(res => res.json());
  }

  doLike(id) {
    const token = localStorage.getItem('auth_token');
    const headers: Headers = new Headers();
    headers.append('Authorization', token);
    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = headers;

    return this.http.put(`${BASE_URL}/like/card/${id}`, {}, requestOptions)
      .map(res => res.json());
  }
}
