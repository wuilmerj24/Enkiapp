import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuariocPage } from '../usuarioc/usuarioc';

@Component({
  selector: 'page-usuariob',
  templateUrl: 'usuariob.html'
})
export class UsuariobPage {
  usuariob:FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.usuariob=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      nombre:['',Validators.compose([Validators.required])],
      apellido:['',Validators.compose([Validators.required])],
      direccion:['',Validators.compose([Validators.required])],
      ciudad:['',Validators.compose([Validators.required])],
      codigoPostal:['',Validators.compose([Validators.required])],
      telefono:['',Validators.compose([Validators.required])],
      pais:['',Validators.compose([Validators.required])],
    })
  }

  btnContinuar(){
    this.navCtrl.push(UsuariocPage);
  }
  ionViewDidLoad() {
    console.log('Hello UsuariobPage Page');
  }

}
