import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuariodPage } from '../usuariod/usuariod';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Usuario } from '../../providers/usuario';

@Component({
  selector: 'page-usuarioc',
  templateUrl: 'usuarioc.html'
})
export class UsuariocPage {
  public usuarioc:FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public usuarioProvider: Usuario) {
    this.usuarioc=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      nombreTDC:['',Validators.compose([Validators.required])],
      numeroTDC:['',Validators.compose([Validators.required])],
      mmTDC:['',Validators.compose([Validators.required])],
      aaTDC:['',Validators.compose([Validators.required])],
      cvvTDC:['',Validators.compose([Validators.required])]
    })
  }

  btnGuardarRegistro(){
    this.usuarioProvider.nombreTDC=this.usuarioc.value.nombreTDC;
    this.usuarioProvider.numeroTDC=this.usuarioc.value.numeroTDC;
    this.usuarioProvider.mmTDC=this.usuarioc.value.mmTDC;
    this.usuarioProvider.aaTDC=this.usuarioc.value.aaTDC;
    this.usuarioProvider.cvvTDC=this.usuarioc.value.cvvTDC;
    this.navCtrl.push(UsuariodPage);
  }

  ionViewDidLoad() {
    console.log('Hello UsuariocPage Page');
  }

}
