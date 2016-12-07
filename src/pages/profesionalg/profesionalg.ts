import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataTest } from '../../providers/data-test';

@Component({
  selector: 'page-profesionalg',
  templateUrl: 'profesionalg.html'
})
export class ProfesionalgPage {

  constructor(public navCtrl: NavController, public datatest: DataTest) {}

  ionViewDidLoad() {
    console.log(this.datatest.copiaseguridad);
  }

}
