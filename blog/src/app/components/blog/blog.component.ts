import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {PhotoService} from "../../services/photo.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  posts = [];
  photos = [];
  private sub: Subscription;

  filterText: string;

  constructor(private photoService: PhotoService, private postService: PostService, private router: Router, private route: ActivatedRoute){}


  ngOnInit() {
    this.getPhotos();
    this.route.queryParams.subscribe(params => {
      this.filterText = params['title'];
    });

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  getPhotos(){
    this.sub = this.photoService.getAllPhotos().subscribe(photos => this.photos = photos);
  }

  getPosts(){
    this.sub = this.postService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  setQuery(){
    this.router.navigate(['blog'], {queryParams: {title: this.filterText}});
  }


}
