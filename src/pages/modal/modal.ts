import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { DataTest } from '../../providers/data-test';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public navCtrl: NavController, public datatest: DataTest,public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ModalPage Page');
  }

  mostrarPais(pais, bandera){
    let data = { 'pais' : pais,'bandera':bandera };
    this.datatest.pais=pais;
    this.viewCtrl.dismiss(data);
  }

}
