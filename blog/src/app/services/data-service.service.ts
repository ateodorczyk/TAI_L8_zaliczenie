import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {

  }

  getAll(){
    return this.http.get(this.url + 'posts')
      .pipe(
        map((x: any[]) => x.slice(0.20))
    );
  }

  get(id: number){
    return this.http.get(this.url + 'posts/' + id);
  }

}
