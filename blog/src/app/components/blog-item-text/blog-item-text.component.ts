import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-item-text',
  templateUrl: './blog-item-text.component.html',
  styleUrls: ['./blog-item-text.component.css']
})
export class BlogItemTextComponent implements OnInit {

  @Input() text:string;
  @Input() id:number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toDetails() {
    this.router.navigate(['/blog/detail/', this.id]);
  }


}
