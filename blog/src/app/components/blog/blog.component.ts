import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items = [{
    id: 1,
    image: 'https://img.newatlas.com/ocean-freashwater-aquifiers.jpg?auto=format%2Ccompress&ch=Width%2CDPR&crop=entropy&fit=crop&h=347&q=60&w=616&s=ef8aad47a3fbcf06e03cf33e8ddc852f',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  },
    {
      id: 2,
      image: 'https://www.sciencedaily.com/images/2017/08/170809142044_1_540x360.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 3,
      image: 'https://www.scholastic.com/content/dam/teachers/Book%20List/2016-2017/books-about-oceans-book-list-4-3.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 4,
      image: 'https://spiritualityhealth.com/assets/images/Articles/_articleSummaryImage/spring-forest_170715_153501.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 5,
      image: 'https://www.almanac.com/sites/default/files/image_nodes/spring-276014_1920.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 6,
      image: 'https://skopjeinfo.mk/sites/default/files/article/teaser-images/2017/april/4896.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 7,
      image: 'http://www.ecoglobalsociety.com/wp-content/uploads/2013/01/colors-Violet-Sunset.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 8,
      image: 'https://i.pinimg.com/564x/74/35/50/7435507fe3c486fbdcd0c07c0941fe5a--purple-sunset-beautiful-sunset.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 9,
      image: 'http://eskipaper.com/images/purple-dusk-2.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    }];

  constructor() {
  }

  ngOnInit() {
  }


}
