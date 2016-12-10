import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataTest } from '../../providers/data-test';
import { Camera } from 'ionic-native';
import { ProfesionalhPage } from '../profesionalh/profesionalh';

@Component({
  selector: 'page-profesionalg',
  templateUrl: 'profesionalg.html'
})
export class ProfesionalgPage {
  public imagenLicenciaLocal: String;
  constructor(public navCtrl: NavController, public datatest: DataTest) {
  }

  volverTomar(){
    let options = {
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    Camera.getPicture( options )
    .then(imageData => {
      this.imagenLicenciaLocal = `data:image/jpeg;base64,${imageData}`;
      this.datatest.fotolicencia=this.imagenLicenciaLocal;
      console.log(this.datatest.fotolicencia);
    })
    .catch(error =>{
      console.error( error );
    });
  }

  guardarFoto(){
    this.navCtrl.push(ProfesionalhPage);
  }

  ionViewDidLoad() {
    this.imagenLicenciaLocal=this.datatest.fotolicencia;
    console.log(this.datatest.copiaseguridad);
  }

}
