import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioaPage } from '../usuarioa/usuarioa';
import { ProfesionalaPage } from '../profesionala/profesionala';

@Component({
  selector: 'page-tiporegistro',
  templateUrl: 'tiporegistro.html'
})
export class TiporegistroPage {


  constructor(public navCtrl: NavController) {}

  btnUsuarioA() {
    this.navCtrl.push(UsuarioaPage);
  }

  btnPrfesional(){
    this.navCtrl.push(ProfesionalaPage);
  }

  ionViewDidLoad() {
    console.log('Hello TiporegistroPage Page');
  }

}
