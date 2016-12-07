import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataTest {
  //Variables del formulario profesionala
  public nombre:String="";
  public apellido:String="";
  public correo:String="";
  public pais:String="";
  public telefono:String="";
  public clave:String="";
  public ciudad:String="";
  public postal:String="";
  //Fin Variables del formulario profesionala

  //Variables del formulario profesionalc
  public segurosocial:String="";
  //Fin Variables del formulario profesionalc

  //Variables del formulario profesionald
  public copiaseguridad:String="";
  //Fin Variables del formulario profesionald

  //Variables del formulario profesionale
  public sesion:String="";
  public servicio:String="";
  //Fin Variables del formulario profesionale

  //Variables del formulario profesionalh
  public fotolicencia:String="";
  //Fin Variables del formulario profesionalh

  //Variables del formulario profesionali
  public fotoprofesional:String="";
  //Fin Variables del formulario profesionali

  constructor(public http: Http) {
    console.log('Hello DataTest Provider');
  }
}
