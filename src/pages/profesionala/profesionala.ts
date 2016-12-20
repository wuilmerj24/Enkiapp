import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ProfesionalbPage } from '../profesionalb/profesionalb';
import { DataTest } from '../../providers/data-test';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModalController} from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-profesionala',
  templateUrl: 'profesionala.html'
})
export class ProfesionalaPage {
  public pais:any;
  profesionala:FormGroup;
  public telefono=['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public postal=[/[a-z]/,/[a-z]/,'-',/\d/,/\d/,/\d/,/\d/];
  public emailRegex ="[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})";
  //[textMask]="{mask:postal}" esto va en el input
  public imgPais="";
  public passRegex ="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  constructor(public navCtrl: NavController, public datatest: DataTest, public formBuilder: FormBuilder, public modalCtrl: ModalController) {
    this.profesionala=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      nombre:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      apellido:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      correo:['',Validators.compose([Validators.required,Validators.pattern(this.emailRegex)])],
      pais:['',Validators.required],
      telefono:['',Validators.compose([Validators.required,Validators.minLength(11)])],
      clave:['',Validators.compose([Validators.required,Validators.pattern(this.passRegex)])],
      ciudad:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      codigoPostal:['',Validators.compose([Validators.required,Validators.minLength(7)])]
    });
  }

  btnContinuar(){
    //console.log(this.profesionala.value)
    this.datatest.nombre=this.profesionala.value.nombre;
    this.datatest.apellido=this.profesionala.value.apellido;
    this.datatest.correo=this.profesionala.value.correo;
    this.datatest.pais=this.profesionala.value.pais;
    this.datatest.telefono=this.profesionala.value.telefono;
    this.datatest.clave=this.profesionala.value.clave;
    this.datatest.ciudad=this.profesionala.value.ciudad;
    this.datatest.postal=this.profesionala.value.postal;
    this.navCtrl.push(ProfesionalbPage);
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.onDidDismiss(data => {
      this.profesionala.controls['pais'].setValue(data.pais);
      this.imgPais=data.bandera;
    });
    modal.present();
  }

  ionViewDidLoad() {
    console.log(this.datatest.pais);
  }
}
