import { Injectable } from '@angular/core';
import {DataServiceService} from "./data-service.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataServiceService{

  constructor(http: HttpClient) {
    super('http://localhost:3000', http);
  }

  getAllPosts(){
    return this.getAll('/posts').pipe(
      map((x: any[]) => x.slice(0,20))
    );
  }

  getPost(id){
    return this.get('/posts', id);
  }
}
