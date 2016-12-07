import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-profesionalh',
  templateUrl: 'profesionalh.html'
})
export class ProfesionalhPage {

  constructor(public navCtrl: NavController) {}
  btnContinuar(){
    this.navCtrl.push(ProfesionalhPage);
  }

  ionViewDidLoad() {
    console.log('Hello ProfesionalhPage Page');
  }

}
