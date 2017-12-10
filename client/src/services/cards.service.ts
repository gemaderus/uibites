import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = `${BASE_DOMAIN}/api`;

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

  getListCardUser(): Observable<any> {
    return this.http.get(`${BASE_URL}/dashboard/mydashboard`)
      .map(res => res.json());
  }

  getCardByID(id):Observable<any>{
    return this.http.get(`${BASE_URL}/dashboard/card/${id}`)
                    .map(res => res.json());
}

  getEditCardByID(id):Observable<any>{
    return this.http.get(`${BASE_URL}/dashboard/edit-card/${id}`)
                    .map(res => res.json());
  }

  editCard(id, card) {
   return this.http.put(`${BASE_URL}/dashboard/edit-card/${id}`,card)
    .map((res) => res.json());
 }

  deleteCard(id){
    console.log(id)
    console.log("entro en el front");
    return this.http.delete(`${BASE_URL}/dashboard/delete-card/${id}`)
                    .map(res => res.json());
  }

  // newCard() {
  //   return this.http.post(`${BASE_URL}/dashboard/new-card`, {title, author_id, description, url, photo}, this.options)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }
}
