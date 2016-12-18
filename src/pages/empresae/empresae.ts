import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Empresae page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-empresae',
  templateUrl: 'empresae.html'
})
export class EmpresaePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EmpresaePage Page');
  }

}
