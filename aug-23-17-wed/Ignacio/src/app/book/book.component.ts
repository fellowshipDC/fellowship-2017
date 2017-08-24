import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.styl']
})
export class BookComponent implements OnInit, OnDestroy {
  title;
  private sub: any;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.title = params['title'];
  });
 }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}
