import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { UsuariobPage } from '../usuariob/usuariob';
import { Usuario } from '../../providers/usuario';
import { matchingPasswords } from '../../validaciones/matchingPassword';
import { matchingEmails } from '../../validaciones/matchingEmail';
import { ToastController} from 'ionic-angular';

@Component({
  selector: 'page-usuarioa',
  templateUrl: 'usuarioa.html'
})

export class UsuarioaPage {
  usuarioa:FormGroup;
  public contError:any;
  public errorCorreo:boolean=false;
  public errorPass:boolean=false;
  public contador:any=0;
  public contadorConfirmaR:any=0;
  public emailRegex ="[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})";
  public passRegex ="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public usuarioProvider: Usuario, public toastCtrl:ToastController) {
    this.usuarioa=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      correo: ['',Validators.compose([Validators.required,Validators.pattern(this.emailRegex)])],
      confirmarEmail: ['',Validators.compose([Validators.required,Validators.pattern(this.emailRegex)])],
      passwordRetry: this.formBuilder.group({
        clave:['',Validators.compose([Validators.required,Validators.pattern(this.passRegex)])],
        passwordConfirmation:['',Validators.compose([Validators.required,Validators.pattern(this.passRegex)])]
      },{validator:this.compararPass('clave','passwordConfirmation')})
    },{validator:this.compararEmail('correo','confirmarEmail')});
  }

  compararEmail(a:string,b:string){
    return (group: FormGroup): {[key: string]: any} => {
      let dA = group.controls[a];
      let dB = group.controls[b];
      if (dA.value !== dB.value) {
        this.errorCorreo=true;
        return {
          mismatchedEmails: true
        };
      }else{
        this.errorCorreo=false;
      }
    }
  }

  compararPass(a:string,b:string){
    return (group: FormGroup): {[key: string]: any} => {
      let dA = group.controls[a];
      let dB = group.controls[b];
      if (dA.value !== dB.value) {
        this.errorPass=true;
        return {
          mismatchedPasswords: true
        };
      }else{
        this.errorPass=false;
        this.usuarioProvider.clave=dA.value;
      }
    }
  }

  mostrarError(){
    let mensaje:any="";
    if(this.errorCorreo!==false){
      this.contError=1;
      console.log(this.errorCorreo);
      mensaje="Error: Correo no coinciden";
      let toast = this.toastCtrl.create({
         message: mensaje,
         duration: 3000,
         position:'middle',
         cssClass:"errorToast"
       });
       toast.present();
    }else if(this.errorPass!==false){
      console.log(this.errorPass);
      this.contError=1;
      mensaje="Error: Clave no coinciden";
      let toast = this.toastCtrl.create({
         message: mensaje,
         duration: 3000,
         position:'middle',
         cssClass:"errorToast"
       });
       toast.present();
    }else{
      this.contError=0;
      this.errorCorreo=false;
      this.errorPass=false;
    }
  }

  btnUsuariob(){
    this.usuarioProvider.correo=this.usuarioa.value.correo;
    console.log(this.usuarioProvider.clave);
    this.navCtrl.push(UsuariobPage);
  }

  mostrarInfoPassword(){
    if(this.contador==0){
      console.log(this.contador);
      this.contador=1;
      let mensaje="Contraseñas que contengan al menos una letra mayúscula.\n\ ";
      mensaje+="Contraseñas que contengan al menos una letra minúscula.\n\ ";
      mensaje+="Contraseñas que contengan al menos un número o caracter especial.\n\ ";
      mensaje+="Contraseñas cuya longitud sea como mínimo 8 caracteres.\n\ ";
      mensaje+="Contraseñas cuya longitud máxima no debe ser arbitrariamente limitada.\n\ ";
      let toast = this.toastCtrl.create({
         message: mensaje,
         duration: 10000,
         position:'bottom',
       });
       toast.present();
    }else{

    }
  }

  mostrarInfoPasswordConfirm(){
    if(this.contadorConfirmaR==0){
      console.log(this.contadorConfirmaR);
      this.contadorConfirmaR=1;
      let mensaje="Contraseñas que contengan al menos una letra mayúscula.\n\ ";
      mensaje+="Contraseñas que contengan al menos una letra minúscula.\n\ ";
      mensaje+="Contraseñas que contengan al menos un número o caracter especial.\n\ ";
      mensaje+="Contraseñas cuya longitud sea como mínimo 8 caracteres.\n\ ";
      mensaje+="Contraseñas cuya longitud máxima no debe ser arbitrariamente limitada.\n\ ";
      let toast = this.toastCtrl.create({
         message: mensaje,
         duration: 10000,
         position:'bottom',
       });
       toast.present();
    }else{

    }
  }

  ionViewDidLoad() {
    console.log('Hello UsuarioaPage Page');
  }

}
