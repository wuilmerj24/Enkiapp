import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SesionPage } from '../sesion/sesion';
import { TiporegistroPage } from '../tiporegistro/tiporegistro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public  navCtrl: NavController) {
  }

  changePageToSesion(){
    this.navCtrl.push(SesionPage);
  }

  btnTipoRegistro(){
    this.navCtrl.push(TiporegistroPage);
  }
}
