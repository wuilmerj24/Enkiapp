import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataTest } from '../../providers/data-test';
import { Camera } from 'ionic-native';
import { ProfesionalhPage } from '../profesionalh/profesionalh';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-profesionalg',
  templateUrl: 'profesionalg.html'
})
export class ProfesionalgPage {
  public imagenLicenciaLocal: String;
  profesionalg:FormGroup;
  public urlPatch="";
  constructor(public navCtrl: NavController, public datatest: DataTest, public formBuilder: FormBuilder) {
    this.profesionalg=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      urlPatch:['',Validators.required],
    });
  }

  volverTomar(){
    let options = {
      quality         : 100,
      allowEdit       : false,
      destinationType : Camera.DestinationType.FILE_URI,
      targetWidth: 1366,
      targetHeight: 768
    }
    Camera.getPicture( options )
    .then(imageData => {
      this.imagenLicenciaLocal = imageData;
      this.datatest.fotolicencia=this.imagenLicenciaLocal;
      console.log(this.datatest.fotolicencia);
      this.profesionalg.controls['urlPatch'].setValue(this.imagenLicenciaLocal);
    })
    .catch(error =>{
      console.error( error );
    });
  }

  guardarFoto(){
    this.navCtrl.push(ProfesionalhPage);
  }

  ionViewDidLoad() {
    this.imagenLicenciaLocal=this.datatest.fotolicencia;
    console.log(this.datatest.copiaseguridad);
  }

}
