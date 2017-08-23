import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.styl'],

  /*template:
  `
  <div>
  Showing details for product:{{title}}
  </div>
  `,*/
})
export class BookComponent implements OnInit {

   title;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub= this.route.params.subscribe(params => {
      this.title = params['title'];
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
