import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items = [{
    image: 'https://polki.pl/foto/4_3_SMALL/co-robic-gdy-krolik-nie-lubi-swojej-klatki-276186.jpg',
    text: 'Królik ma długie uszy'
  },
    {
      image: 'https://polki.pl/foto/4_3_SMALL/co-robic-gdy-krolik-nie-lubi-swojej-klatki-276186.jpg',
      text: 'Królik'
    },
    {
      image: 'https://polki.pl/foto/4_3_SMALL/co-robic-gdy-krolik-nie-lubi-swojej-klatki-276186.jpg',
      text: 'Królik'
    },
    {
      image: 'https://polki.pl/foto/4_3_SMALL/co-robic-gdy-krolik-nie-lubi-swojej-klatki-276186.jpg',
      text: 'Królik'
    },
    {
      image: 'https://polki.pl/foto/4_3_SMALL/co-robic-gdy-krolik-nie-lubi-swojej-klatki-276186.jpg',
      text: 'Królik'
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
