import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataTest } from '../../providers/data-test';
import { ProfesionalkPage } from '../profesionalk/profesionalk';

@Component({
  selector: 'page-profesionalj',
  templateUrl: 'profesionalj.html'
})
export class ProfesionaljPage {
  public imagenFaceLocal:String;
  public resultFoto:any;
  constructor(public navCtrl: NavController,public datatest: DataTest) {}

  volverTomar(){
    this.navCtrl.pop();
  }

  guardarFoto(){
    this.navCtrl.push(ProfesionalkPage);
  }

  ionViewDidLoad() {
    this.imagenFaceLocal=this.datatest.fotoprofesional;
    console.log('Hello ProfesionaljPage Page');
  }

}
