import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  items = [];
  private sub: Subscription;

  filterText: string;

  constructor(private dataService: DataServiceService, private router: Router, private route: ActivatedRoute){}


  ngOnInit() {
    this.getPosts();
    this.route.queryParams.subscribe(params => {
      this.filterText = params['title'];
    });

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  getPosts(){
    this.sub = this.dataService.getAll().subscribe(posts => this.items = posts);
  }

  setQuery(){
    this.router.navigate(['blog'], {queryParams: {title: this.filterText}});
  }


}
