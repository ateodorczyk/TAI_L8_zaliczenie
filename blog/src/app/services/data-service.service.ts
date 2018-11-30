import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private url: string, private http: HttpClient) {

  }

  getAll(api){
    return this.http.get(this.url + api);
  }

  get(api, id){
    return this.http.get(this.url + api + '/' + id);
  }

  create(api, data){
    const headers = new HttpHeaders({
      'content-type': 'application/json'});

    return this.http.post(this.url + api, data, {headers : headers});
  }

}
