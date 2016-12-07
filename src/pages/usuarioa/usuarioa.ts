import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuariobPage } from '../usuariob/usuariob';

@Component({
  selector: 'page-usuarioa',
  templateUrl: 'usuarioa.html'
})

export class UsuarioaPage {
  usuarioa:FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.usuarioa=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      correo:['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')])],
      confirmarEmail:['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')])],
      clave:['',Validators.compose([Validators.required])],
      ConfirmarPass:['',Validators.compose([Validators.required])]
    })
  }

  btnUsuariob(){
    this.navCtrl.push(UsuariobPage);
    console.log('click');
  }

  ionViewDidLoad() {
    console.log('Hello UsuarioaPage Page');
  }

}
