import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.styl']
})
export class PreviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  //Función que se llama al presionar el botón
  //Se importa router, se utiliza el constructor
  goData(){
    this.router.navigateByUrl('/table');
  }

}
