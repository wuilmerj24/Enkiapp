import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions} from '@angular/http';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Sesioncliente {
  public resultadoCliente:any="";
  public correo:any="";
  public clave:any="";

  //datos del cliiente
  public idUsuario:any="";
  public nombre:any="";
  public apellido:any="";
  public direccion:any="";
  public ciudad:any="";
  public codigopostal:any="";
  public telefono:any="";
  public pais:any="";
  public bandera:any="";

  //datos tarjeta de credito
  public id:any="";
  public idTDC:any="";
  public tipoTDC:any="";
  public nombreTDC:any="";
  public numeroTDC:any="";
  public mesTDC:any="";
  public anioTDC:any="";
  public cvvTDC:any="";

  constructor(public http: Http, public toastCtrl:ToastController) {
    console.log('Hello Sesioncliente Provider');
  }
}