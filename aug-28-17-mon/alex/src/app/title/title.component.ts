import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.styl']
})
export class TitleComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $(".emoji").mouseenter(function(){
        $("p").html(function(buscayreemplaza, reemplaza) {
            return reemplaza.replace('GIFS 😈', 'MOMOS 😇');
        });
      });
      $(".emoji").mouseleave(function(){
        $("p").html(function(buscayreemplaza, reemplaza) {
          return reemplaza.replace('MOMOS 😇', 'GIFS 😈');
        });
      });
    });
  }

}
