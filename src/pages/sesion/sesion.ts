import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tiposesion } from '../../providers/tiposesion';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ClientePage } from '../cliente/cliente';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-sesion',
  templateUrl: 'sesion.html'
})
export class SesionPage {
  login:FormGroup;
  public emailRegex ="[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})";
  constructor(public navCtrl: NavController, public tiposesion: Tiposesion, public formBuilder: FormBuilder,public loadingCtrl: LoadingController) {
    this.login=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      correo:['',Validators.compose([Validators.required,Validators.pattern(this.emailRegex)])],
      clave:['',Validators.required]
    })
  }

  iniciarSesion(){
    this.tiposesion.correoSesion=this.login.value.correo;
    this.tiposesion.claveSesion=this.login.value.clave;
    this.tiposesion.iniciar();
    let loader = this.loadingCtrl.create({
      content: "Espere...",
      duration: 3000
    });
    loader.present();
    setTimeout(() => { // <===
      console.log("Tipo sesionn: "+this.tiposesion.resultadoSesion);
      if(this.tiposesion.resultadoSesion==0){
        //ok profesional
      }else if(this.tiposesion.resultadoSesion==1){
        //ok cliente
        this.navCtrl.push(ClientePage);
      }else{
        //error
      }
    }, 1500);
  }

  btnRecuperar(){

  }

  ionViewDidLoad() {
    console.log('Hello SesionPage Page');
  }

}
