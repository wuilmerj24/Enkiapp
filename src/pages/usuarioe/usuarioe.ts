import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Usuario } from '../../providers/usuario';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-usuarioe',
  templateUrl: 'usuarioe.html'
})
export class UsuarioePage {
  public usuarioe:FormGroup;
  public telRegistrado:any="";
  public nuevoNumero:any="";
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public usuarioProvider: Usuario) {
    this.usuarioe=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      telRegistrado:['',Validators.compose([Validators.required])],
      nuevoNumero:['',Validators.compose([Validators.required])]
    })
  }

  cambiarNum(){
    this.usuarioProvider.telefono=this.nuevoNumero;
    this.navCtrl.pop();
    //reenviar mensaje sms
  }

  ionViewDidLoad() {
    this.telRegistrado=this.usuarioProvider.telefono;
    console.log('Hello UsuarioePage Page');
  }

}
