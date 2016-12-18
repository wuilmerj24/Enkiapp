import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Transfer } from 'ionic-native';
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
  public fotolicencia:any="";
  //Fin Variables del formulario profesionalh

  //Variables del formulario profesionali
  public fotoprofesional:any="";
  //Fin Variables del formulario profesionali

  public datos:String="";

  constructor(public http: Http) {
    console.log('Hello DataTest Provider');
  }

  enviarFormProfesional(){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    this.datos="tipo=nuevoProfesional&nombre="+this.nombre+"&apellido="+this.apellido+"&correo="+this.correo+"&pais="+this.pais+"&telefono="+this.telefono+"&clave="+this.clave+"&ciudad="+this.ciudad+"&postal="+this.postal+"&seguroSocial="+this.segurosocial+"&recibirCopiaAntecedentes="+this.copiaseguridad+"&sesion="+this.sesion+"&servicio="+this.servicio+"&fotoLiencia="+this.fotolicencia+"&fotoFace="+this.fotoprofesional;
    this.http.post('http://developerwym.com.ve/enki/recibe.php',this.datos,options).map(res => res.text()).subscribe(data => {alert("ok"+data);},err =>{alert("Error! Form cliente:"+err);});
  }

  fotoLicencia(){
    const fileTransfer = new Transfer();
    var optFileLicencia:any;
    var url="http://developerwym.com.ve/enki/recibirImg.php";
    //fotoLicencia
    optFileLicencia= {
     fileKey: 'imagen',
     fileName: this.fotolicencia
    }
    fileTransfer.upload(this.fotolicencia,url, optFileLicencia)
    .then((data) => {
       alert("subido: "+JSON.stringify(data.response));
        this.fotoProfesional();
    }, (err) => {
       // error
       alert("Error Foto licencia: "+ JSON.stringify(err));
    })
  }

  fotoProfesional(){
    const fileTransfer = new Transfer();
    var optFileProfesional:any;
    var url="http://developerwym.com.ve/enki/recibirImg.php";
    //fotoLicencia
    optFileProfesional= {
     fileKey: 'imagen',
     fileName: this.fotoprofesional
    }
    fileTransfer.upload(this.fotoprofesional,url, optFileProfesional)
    .then((data) => {
       alert("subido: "+JSON.stringify(data.response));
       this.enviarFormProfesional();
    }, (err) => {
       // error
       alert("Error: Foto profesional"+ JSON.stringify(err));
    })
  }

}
