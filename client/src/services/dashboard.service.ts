import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = `${BASE_DOMAIN}/api`;


@Injectable()
export class DashboardService {
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

  deleteCard(id){
    console.log(id)
    console.log("entro en el front");
    return this.http.delete(`${BASE_URL}/dashboard/delete-card/${id}`)
                    .map(res => res.json());
  }
}
