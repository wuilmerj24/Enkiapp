import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfesionalePage } from '../profesionale/profesionale';
import { DataTest } from '../../providers/data-test';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'page-profesionald',
  templateUrl: 'profesionald.html'
})
export class ProfesionaldPage {
  profesionald:FormGroup;
  public aceptoVar:Boolean=true;
  public recibirVar:any;
  constructor(public navCtrl: NavController, public datatest: DataTest, public formBuilder: FormBuilder) {
    this.profesionald=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      //aceptarcondiciones:['',Validators.compose([Validators.required])]
    })
  }

  aceptoFunc(){
    this.aceptoVar=!this.aceptoVar;
    console.log(this.aceptoVar);
  }

  recibirFunc(){
    this.recibirVar=!this.recibirVar;
    console.log(this.recibirVar);
  }

  btnContinuar(){
    this.datatest.copiaseguridad=this.profesionald.value.copiaseguridad;
    this.navCtrl.push(ProfesionalePage);
  }
  ionViewDidLoad() {
    console.log('Hello ProfesionaldPage Page');
  }

}
