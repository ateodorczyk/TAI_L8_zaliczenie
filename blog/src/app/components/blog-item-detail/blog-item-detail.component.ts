import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Subscription} from "rxjs";
import {PhotoService} from "../../services/photo.service";

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit, OnDestroy {

  public id: string;
  public post;
  public photo;

  private sub: Subscription;

  constructor(private postService: PostService, private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPost();
    this.getPhoto();
  }

  getPost(){
    this.sub = this.postService.getPost(this.id).subscribe(post => this.post = post);
  }

  getPhoto(){
    this.sub = this.photoService.getPhoto(this.id).subscribe(photo => this.photo = photo);
  }



}
