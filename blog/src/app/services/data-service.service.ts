import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

}
