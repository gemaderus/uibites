import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = `${BASE_DOMAIN}/api`;





@Injectable()
export class DashboardService {
  card:any;

  private options = {withCredentials:true};

  constructor(private http: Http) {}

  getList(): Observable<any> {
    return this.http.get(`${BASE_URL}/dashboard`,this.options)
      .map(res => res.json());
  }

  getListCardUser(): Observable<any> {
    return this.http.get(`${BASE_URL}/dashboard/mydashboard`,this.options)
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
   return this.http.put(`${BASE_URL}/dashboard/edit-card/${id}`,card, this.options)
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
