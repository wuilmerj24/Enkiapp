import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfesionaldPage } from '../profesionald/profesionald';
import { DataTest } from '../../providers/data-test';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-profesionalc',
  templateUrl: 'profesionalc.html'
})
export class ProfesionalcPage {
  profesionalc:FormGroup;
  constructor(public navCtrl: NavController, public datatest: DataTest, public formBuilder: FormBuilder) {
    this.profesionalc=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      segurosocial:['',Validators.compose([Validators.required,Validators.minLength(9),Validators.maxLength(9)])]
    })
  }

  btnContinuar(){
    this.datatest.segurosocial=this.profesionalc.value.segurosocial;
    this.navCtrl.push(ProfesionaldPage);
  }
  ionViewDidLoad() {
    console.log('Hello ProfesionalcPage Page');
  }

}
