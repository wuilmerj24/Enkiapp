import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-usuarioe',
  templateUrl: 'usuarioe.html'
})
export class UsuarioePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello UsuarioePage Page');
  }

}
