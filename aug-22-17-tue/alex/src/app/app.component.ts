import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  users: object;
  constructor(private http: Http) {}

  getUsers () {
    this.http.get('https://api.github.com/users').subscribe((res: Response) => this.users = res.json());
  }

  ngOnInit () {
    this.getUsers();
  }
}
