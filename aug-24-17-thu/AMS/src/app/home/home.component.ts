import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  
  songs: any;
  songs2: any;

  constructor(private http: Http) {}

  ngOnInit(){
    this.http.get('http://www.songsterr.com/a/ra/songs/byartists.json?artists=Metallica').subscribe((res: Response) => this.songs = res.json());
    this.http.get('http://www.songsterr.com/a/ra/songs/byartists.json?artists=Nirvana').subscribe((res: Response) => this.songs2 = res.json());
  }

  whichArtist() {
    console.log(this.songs2);
  }
}
