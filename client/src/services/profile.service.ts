import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = `${BASE_DOMAIN}/api`;


@Injectable()
export class ProfileService {
  user:object;

  private options = {withCredentials:true};

  constructor(private http: Http) {}

  deleteUser(){
    return this.http.delete(`${BASE_URL}/profile/delete`)
    .map(res => res.json());
  }

  // updateUser() {
  //   return this.http.post(`${BASEURL}/profile/edit-profile`, {name,username,email, bio, photo}, this.options)
  //     .map(res => res.json())
  //     .map(user => this.emitUserLoginEvent(user))
  //     .catch(this.handleError);
  // }
  getUserDetail(id){
    // console.log(id)
    // console.log("entro en el front");
    return this.http.get(`${BASE_URL}/profile/${id}`)
                    .map(res => res.json());
  }

  getEditUser(id){
    // console.log(id)
    // console.log("entro en el front");
    return this.http.get(`${BASE_URL}/profile/edit-profile/${id}`)
                    .map(res => res.json());
  }


}
