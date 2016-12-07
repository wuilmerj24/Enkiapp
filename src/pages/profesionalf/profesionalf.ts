import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfesionalgPage } from '../profesionalg/profesionalg';
import { DataTest } from '../../providers/data-test';

@Component({
  selector: 'page-profesionalf',
  templateUrl: 'profesionalf.html'
})
export class ProfesionalfPage {

  constructor(public navCtrl: NavController, public datatest: DataTest) {}

  btnContinuar(){
    this.navCtrl.push(ProfesionalgPage);
  }
  ionViewDidLoad() {
    console.log('Hello ProfesionalfPage Page');
  }

}
