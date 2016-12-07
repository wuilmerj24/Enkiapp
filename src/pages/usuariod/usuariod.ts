import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioePage } from '../usuarioe/usuarioe';

@Component({
  selector: 'page-usuariod',
  templateUrl: 'usuariod.html'
})
export class UsuariodPage {

  constructor(public navCtrl: NavController) {}

  btnUsuarioe(){
    this.navCtrl.push(UsuarioePage);
  }

  ionViewDidLoad() {
    console.log('Hello UsuariodPage Page');
  }

}
