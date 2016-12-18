import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Usuario } from '../../providers/usuario';
import { UsuarioePage } from '../usuarioe/usuarioe';

@Component({
  selector: 'page-usuariod',
  templateUrl: 'usuariod.html'
})
export class UsuariodPage {
  public usuariod:FormGroup;
  public telRegistrado:any="";
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public usuarioProvider: Usuario) {
    this.usuariod=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      telRegistrado:['',Validators.compose([Validators.required])],
      codigo:['',Validators.compose([Validators.required])]
    })
  }

  btnVerificar(){
    
  }

  btnReenviar(){

  }

  btnCambiarnum(){
    this.navCtrl.push(UsuarioePage);
  }

  ionViewDidLoad() {
    this.usuariod.controls['telRegistrado'].setValue(this.usuarioProvider.telefono);
    this.usuarioProvider.enviarFormUsuario();
    console.log('Hello UsuariodPage Page');
  }

}
