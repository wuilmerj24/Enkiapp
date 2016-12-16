import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuariobPage } from '../usuariob/usuariob';
import { Usuario } from '../../providers/usuario';

@Component({
  selector: 'page-usuarioa',
  templateUrl: 'usuarioa.html'
})

export class UsuarioaPage {
  usuarioa:FormGroup;
  public emailRegex ="[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})";
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public usuarioProvider: Usuario) {
    this.usuarioa=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      correo: ['',Validators.compose([Validators.required,Validators.pattern(this.emailRegex)])],
      confirmarEmail: ['',Validators.compose([Validators.required,Validators.pattern(this.emailRegex)])],
      clave: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  btnUsuariob(){
    this.usuarioProvider.correo=this.usuarioa.value.correo;
    this.usuarioProvider.clave=this.usuarioa.value.clave;
    console.log(this.usuarioa.value.clave);
    this.navCtrl.push(UsuariobPage);
  }

  ionViewDidLoad() {
    console.log('Hello UsuarioaPage Page');
  }

}
