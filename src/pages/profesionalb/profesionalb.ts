import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfesionalcPage } from '../profesionalc/profesionalc';
import { DataTest } from '../../providers/data-test';

@Component({
  selector: 'page-profesionalb',
  templateUrl: 'profesionalb.html'
})
export class ProfesionalbPage {
  public form1:any;
  constructor(public navCtrl: NavController, public datatest: DataTest) {}

  btnContinuar(){
    this.navCtrl.push(ProfesionalcPage);
  }

  ionViewDidLoad() {
    console.log(this.datatest.nombre);
  }

}
