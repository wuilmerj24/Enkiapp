import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Toast } from 'ionic-native';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Usuario {
  //pagina usuarioa
  public correo:any="";
  public clave:any="";

  //pagina usuariob
  public nombre:any="";
  public apellido:any="";
  public direccion:any="";
  public ciudad:any="";
  public codigopostal:any="";
  public telefono:any="";
  public pais:any="";

  //pagina usuarioc
  public nombreTDC:any="";
  public numeroTDC:any="";
  public mmTDC:any="";
  public aaTDC:any="";
  public cvvTDC:any="";

  //codigo de verificacion pagina d
  public codigo:any="";

  public datos:String="";

  public resultado:any;

  constructor(public http: Http, public toastCtrl:ToastController) {
    console.log('Hello Usuario Provider');
  }

  enviarFormUsuario(){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    //let headers = new Headers({ 'Content-Type': 'application/json'});
    //let headers = new Headers({ 'Content-Type': 'text/xml'});
    let options = new RequestOptions({ headers: headers });
    let url='http://developerwym.com.ve/enki/recibe.php';
    this.datos="tipo=registrarUsuario&correo="+this.correo+"&clave="+this.clave+"&nombre="+this.nombre+"&apellido="+this.apellido+"&direccion="+this.ciudad+"&codPostal="+this.codigopostal+"&telefono="+this.telefono+"&pais="+this.pais+"&nombreTDC="+this.nombreTDC+"&numeroTDC="+this.numeroTDC+"&mmTDC="+this.mmTDC+"&aaTDC="+this.aaTDC+"&cvvTDC="+this.cvvTDC+"&codigo="+this.codigo;
    this.http.post(url,"tipo=registrarUsuario&correo="+this.correo+"&clave="+this.clave,options).map(res => res.json()).subscribe(data => {
      //console.log(data[0].estatus);
      let mensaje:any="";
      if(data[0].estatus==0){
        mensaje="Ok "+data[0].estatus;
      }else if(data[0].estatus==1){
        mensaje="Error al insertar "+data[0].estatus;
      }else if(data[0].estatus==2){
        mensaje="Correo Ya se encuentra registrado "+data[0].estatus;
      }else if(data[0].estatus==3){
        mensaje="Error "+data[0].estatus;
      }

      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 5000,
        position:'middle'
      });
      toast.present();
    },err =>{alert("Error! Form cliente:"+err);});
  }
}
