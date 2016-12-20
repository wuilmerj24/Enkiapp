import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuariocPage } from '../usuarioc/usuarioc';
import { Usuario } from '../../providers/usuario';
import { ModalController} from 'ionic-angular';
import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-usuariob',
  templateUrl: 'usuariob.html'
})
export class UsuariobPage {
  usuariob:FormGroup;
  public pais:any;
  public imgPais="";
  public telefono=['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public postal=[/[a-z]/,/[a-z]/,'-',/\d/,/\d/,/\d/,/\d/];
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public usuarioProvider: Usuario, public modalCtrl: ModalController) {
    this.usuariob=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      nombre:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      apellido:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      direccion:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      ciudad:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      codigoPostal:['',Validators.compose([Validators.required,Validators.minLength(7)])],
      telefono:['',Validators.compose([Validators.required,Validators.minLength(11)])],
      pais:['',Validators.compose([Validators.required])],
    })
  }

  btnContinuar(){
    this.usuarioProvider.nombre=this.usuariob.value.nombre;
    this.usuarioProvider.apellido=this.usuariob.value.apellido;
    this.usuarioProvider.direccion=this.usuariob.value.direccion;
    this.usuarioProvider.ciudad=this.usuariob.value.ciudad;
    this.usuarioProvider.codigopostal=this.usuariob.value.codigoPostal;
    this.usuarioProvider.telefono=this.usuariob.value.telefono;
    this.usuarioProvider.pais=this.usuariob.value.pais;
    this.navCtrl.push(UsuariocPage);
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.onDidDismiss(data => {
      this.usuariob.controls['pais'].setValue(data.pais);
      this.imgPais=data.bandera;
    });
    modal.present();
  }

  ionViewDidLoad() {
    console.log('Hello UsuariobPage Page');
  }

}
