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
  public emailRegex ="[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})";
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.login=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      correo: ['',Validators.compose([Validators.required,Validators.pattern(this.emailRegex)])],
      clave:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern('[A-Za-z0-9!?-]{8,12}')])]
    })
  }

  iniciarSesion(){
      //this.navCtrl.push(ClientePage);
  }

  recuperar(){
      this.navCtrl.push(RecuperarPage);
  }

  ionViewDidLoad() {
    console.log(this.login.value);
  }
}
