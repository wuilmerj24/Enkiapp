import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DataTest } from '../../providers/data-test';
import { ProfesionaliPage } from '../profesionali/profesionali';
//import { CameraPreview, CameraPreviewRect } from 'ionic-native';

@Component({
  selector: 'page-profesionalh',
  templateUrl: 'profesionalh.html',
})
export class ProfesionalhPage {
  constructor(public navCtrl: NavController,public datatest: DataTest) {

  }

  btnContinuar(){
    this.navCtrl.push(ProfesionaliPage);
  }

  ionViewDidLoad() {
    console.log('Hello ProfesionalhPage Page');
  }

}
