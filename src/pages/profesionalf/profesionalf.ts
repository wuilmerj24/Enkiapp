import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfesionalgPage } from '../profesionalg/profesionalg';
import { DataTest } from '../../providers/data-test';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-profesionalf',
  templateUrl: 'profesionalf.html'
})
export class ProfesionalfPage {
  profesionalf:FormGroup;
  public image:string;
  constructor(public navCtrl: NavController, public datatest: DataTest, public formBuilder: FormBuilder) {
    this.profesionalf=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      sesion:['',Validators.required],
      servicio:['',Validators.required]
    })
  }

  btnContinuar(){
    let options = {
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    Camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
      this.datatest.fotolicencia=this.image;
      console.log(this.datatest.fotolicencia);
      this.navCtrl.push(ProfesionalgPage);
    })
    .catch(error =>{
      console.error( error );
    });
  }
  ionViewDidLoad() {
    this.profesionalf.controls['sesion'].setValue(this.datatest.sesion);
    this.profesionalf.controls['servicio'].setValue(this.datatest.servicio);
    console.log('Hello ProfesionalfPage Page');
  }

}
