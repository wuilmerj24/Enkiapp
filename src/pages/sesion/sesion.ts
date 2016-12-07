import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientePage} from '../cliente/cliente';
import {RecuperarPage} from '../recuperar/recuperar';

@Component({
  selector: 'page-sesion',
  templateUrl: 'sesion.html'
})
export class SesionPage {
  login:FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.login=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      correo:['',Validators.required],
      clave:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern('[A-Za-z0-9!?-]{8,12}')])]
    })
  }

  changePageToMapaCliente(){
      this.navCtrl.push(ClientePage);
  }

  recuperar(){
      this.navCtrl.push(RecuperarPage);
  }

  ionViewDidLoad() {
    console.log(this.login.value);
  }
}
