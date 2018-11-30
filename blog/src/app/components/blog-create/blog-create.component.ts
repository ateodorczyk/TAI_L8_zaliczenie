import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  post = {
    title: '',
    url: '',
    content: '',
  }

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.addPost(this.post);
  }

  addPost(post){
    this.postService.createPost(post).subscribe( x => {
        this.router.navigate(['/blog']);
    });
  }

}
