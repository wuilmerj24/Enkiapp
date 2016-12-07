import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuariodPage } from '../usuariod/usuariod';

@Component({
  selector: 'page-usuarioc',
  templateUrl: 'usuarioc.html'
})
export class UsuariocPage {

  constructor(public navCtrl: NavController) {

  }

  btnGuardarRegistro(){
    this.navCtrl.push(UsuariodPage);
  }

  ionViewDidLoad() {
    console.log('Hello UsuariocPage Page');
  }

}
