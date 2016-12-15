import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import {DataTest} from '../../providers/data-test';


@Component({
  selector: 'page-profesionalk',
  templateUrl: 'profesionalk.html'
})
export class ProfesionalkPage {

  constructor(public navCtrl: NavController, public datates: DataTest, public platform:Platform) {

  }

  cerrarApp(){
    this.platform.exitApp();
  }
  ionViewDidLoad() {
    console.log('Hello ProfesionalkPage Page');
  }

}
