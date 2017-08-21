import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
    private header: string = 'Paola';
  
    title: string = 'Oye Arnold!';
    images: string[] = [
      'http://k37.kn3.net/taringa/1/3/7/2/1/7/43/xxrodrigogamerxx/616.jpg',
      'http://static.elmeme.me/static/uploads/images/2015/08/100204/100231_subitem_full.jpg',
      'https://pmcvariety.files.wordpress.com/2016/07/hey-arnold-3.jpg',
      'http://i.perezhilton.com/wp-content/uploads/2016/07/hey-arnold-movie-nick-character-animation__oPt.jpg',
      'https://k41.kn3.net/A5205101E.gif',
      'https://i.pinimg.com/originals/d8/85/93/d885934ce99fb77a558042efe1394d89.jpg',
      'http://edgecast.buscafs.com/www.sandiegored.com/public/uploads/images/160753.gif'
    ]; 
  
  getHeader(){
    return this.header;
  }  
  goToIMG(src) {
      console.log(src);
    }
  
  }
  

