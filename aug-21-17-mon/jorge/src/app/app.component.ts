import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  private header: string = 'Jorge';

  title: string = 'Rick and Morty';

  images: string[] = [
    'http://cdn2us.denofgeek.com/sites/denofgeekus/files/2017/07/rick-and-morty-portal.jpg',
    'http://www.konbini.com/en/files/2017/04/ibuin.jpg',
    'https://cdn2.fatsoma.com/media/W1siZiIsInB1YmxpYy8yMDE3LzUvMzEvMjEvNi8xNC84NjMvMTE5MDkxLXJpY2stYW5kLW1vcnR5LXJpY2stYW5kLW1vcnR5LmpwZWciXV0',
    'https://blog.animationstudies.org/wp-content/uploads/2017/03/Zy2vKfU.png',
    'http://i.cdn.turner.com/adultswim/big/video/rick-and-morty-marathon-promo/promo_RAM_LIVE_THURS_30_Social.jpg',
    'http://cdn3.thr.com/sites/default/files/2015/07/rick_and_morty_s02_still.jpg',
    'http://i.imgur.com/QQL2Htb.png'
  ];

  getHeader() {
    return this.header;
  }

  goToIMG(src) {
    console.log(src);
  }

}
