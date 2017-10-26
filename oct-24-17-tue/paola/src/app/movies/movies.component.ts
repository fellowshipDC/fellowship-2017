import { Component, OnInit } from '@angular/core';
import * as dbox from '@dboxjs/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.styl']
})
export class MoviesComponent implements OnInit {
  config = {
    'size': {
      'width': 1000,
      'height': 500,
      'margin': {top: 20, right: 20, bottom: 30, left: 40},
    },
    'xAxis': {
      'scale': 'time'
    }
  };

  ngOnInit() {
    dbox.chart(this.config)
    .bindTo('#movies')
    .data({'csv': '/assets/movie.csv'})
    .layer(dbox.timeline)
    .x('release_date')
    .series(['vote_average'])
    .end()
    .draw();


    dbox.chart(this.config)
    .bindTo('#budget')
    .data({'csv': '/assets/movie.csv'})
    .layer(dbox.timeline)
    .x('release_date')
    .series(['budget'])
    .end()
    .draw();

    dbox.chart(this.config)
    .bindTo('#revenue')
    .data({'csv': '/assets/movie.csv'})
    .layer(dbox.timeline)
    .x('release_date')
    .series(['revenue'])
    .end()
    .draw();

    dbox.chart(this.config)
    .bindTo('#vote')
    .data({'csv': '/assets/movie.csv'})
    .layer(dbox.timeline)
    .x('vote_count')
    .series(['vote_average'])
    .end()
    .draw();
  }

}
