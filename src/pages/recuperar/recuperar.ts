import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-recuperar',
  templateUrl: 'recuperar.html'
})
export class RecuperarPage {
  recuperar:FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.recuperar=this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
    correo:['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')])]
    })
  }

  ionViewDidLoad() {
    console.log('Hello RecuperarPage Page');
  }

}
