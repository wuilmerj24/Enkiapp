import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfesionalfPage } from '../profesionalf/profesionalf';
import { DataTest } from '../../providers/data-test';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-profesionale',
  templateUrl: 'profesionale.html'
})
export class ProfesionalePage {
  profesionale:FormGroup;
  constructor(public navCtrl: NavController, public datatest: DataTest, public formBuilder: FormBuilder) {
    this.profesionale=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      sesion:['',Validators.required],
      servicio:['',Validators.required]
    })
  }

  btnContinuar(){
    this.datatest.sesion=this.profesionale.value.sesion;
    this.datatest.servicio=this.profesionale.value.servicio;
    this.navCtrl.push(ProfesionalfPage);
  }

  ionViewDidLoad() {
    console.log('Hello ProfesionalePage Page');
  }

}
