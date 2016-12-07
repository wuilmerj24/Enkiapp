import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Profesionali page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profesionali',
  templateUrl: 'profesionali.html'
})
export class ProfesionaliPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProfesionaliPage Page');
  }

}
