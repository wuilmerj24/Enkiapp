import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfesionalePage } from '../profesionale/profesionale';
import { DataTest } from '../../providers/data-test';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-profesionald',
  templateUrl: 'profesionald.html'
})
export class ProfesionaldPage {
  profesionald:FormGroup;
  constructor(public navCtrl: NavController, public datatest: DataTest, public formBuilder: FormBuilder) {
    this.profesionald=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      copiaseguridad:['',Validators.required],
      aceptarcondiciones:['',Validators.required]
    })
  }

  btnContinuar(){
    this.datatest.copiaseguridad=this.profesionald.value.copiaseguridad;
    this.navCtrl.push(ProfesionalePage);
  }
  ionViewDidLoad() {
    console.log('Hello ProfesionaldPage Page');
  }

}
