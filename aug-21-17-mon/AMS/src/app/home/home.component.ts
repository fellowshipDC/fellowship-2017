import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  constructor() { }

  header: string = 'Random';
  
  title: string = '\\o/';
  
  images: string[] = [
    'http://images5.fanpop.com/image/photos/30700000/Random-random-30798866-500-325.jpg',
    'http://globalgamejam.org/sites/default/files/styles/game_sidebar__normal/public/game/featured_image/promo_5.png',   
    'https://i.pinimg.com/736x/49/f3/c5/49f3c5de0e55c4fbdc26e8fd26e81707--elephant-illustration-illustration-children.jpg',
    'https://i.pinimg.com/736x/be/61/a1/be61a1b26283e09605a267207991d42c--food-pics-random-things.jpg',
    'https://img.buzzfeed.com/buzzfeed-static/static/2017-08/1/17/campaign_images/buzzfeed-prod-fastlane-01/31-cool-and-random-things-you-can-probably-afford-2-31108-1501622861-0_dblbig.jpg',
  ];
  
  goToImg(src) {
      console.log(src)
  }

  ngOnInit() {
  } 

}
