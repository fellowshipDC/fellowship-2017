import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using',
  templateUrl: './using.component.html',
  styleUrls: ['./using.component.styl']
})
export class UsingComponent implements OnInit {

  private logos = [
    "http://sailsjs.com/images/homepage_logo_pge.png",
    "http://sailsjs.com/images/homepage_logo_ae.png",
    "http://sailsjs.com/images/homepage_logo_postman.png",
    "http://sailsjs.com/images/homepage_logo_leidos.png",
    "http://sailsjs.com/images/homepage_logo_paris.png",
    "http://sailsjs.com/images/homepage_logo_microsoft.png",
    "http://sailsjs.com/images/homepage_logo_apigee.png",
    "http://sailsjs.com/images/homepage_logo_broadinstitute.png",
    "http://sailsjs.com/images/homepage_logo_18f.png",
    "http://sailsjs.com/images/homepage_logo_devmountain.png",
    "http://sailsjs.com/images/homepage_logo_verizon.png",
    "http://sailsjs.com/images/homepage_logo_groupahead.png",
    "http://sailsjs.com/images/homepage_logo_par.png",
    "http://sailsjs.com/images/homepage_logo_jetblue.png",
    "http://sailsjs.com/images/homepage_logo_anypresence.png",
    "http://sailsjs.com/images/homepage_logo_sungard.png",
    "http://sailsjs.com/images/homepage_logo_elliptic.png",
    "http://sailsjs.com/images/homepage_logo_lions.png",
    "http://sailsjs.com/images/homepage_logo_scoutlit.png",
    "http://sailsjs.com/images/homepage_logo_gladys.png",
    "http://sailsjs.com/images/homepage_logo_beyondsoft.png",
    "http://sailsjs.com/images/homepage_logo_epicure.png",
    "http://sailsjs.com/images/homepage_logo_fidelity.png",
    "http://sailsjs.com/images/homepage_logo_waf.png"
  ]
  constructor() { }

  ngOnInit() {
  }

}
