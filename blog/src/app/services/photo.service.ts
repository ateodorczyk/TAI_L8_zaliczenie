import { Injectable } from '@angular/core';
import {DataServiceService} from "./data-service.service";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends DataServiceService{

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com', http);
  }

  getAllPhotos(){
    return this.getAll('/photos').pipe(
      map((x: any[]) => x.slice(0,20))
    );
  }

  getPhoto(id){
    return this.get('/photos', id);
  }
}
