import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Transfer } from 'ionic-native';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

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

  constructor(public http: Http, public toastCtrl:ToastController) {
    console.log('Hello DataTest Provider');
  }

  enviarFormProfesional(){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let url='http://192.168.0.100/enki/recibe.php';
    this.datos="tipo=nuevoProfesional&nombre="+this.nombre+"&apellido="+this.apellido+"&correo="+this.correo+"&pais="+this.pais+"&telefono="+this.telefono+"&clave="+this.clave+"&ciudad="+this.ciudad+"&postal="+this.postal+"&seguroSocial="+this.segurosocial+"&recibirCopiaAntecedentes="+this.copiaseguridad+"&sesion="+this.sesion+"&servicio="+this.servicio+"&fotoLiencia="+this.fotolicencia+"&fotoFace="+this.fotoprofesional;
    //this.http.post('http://192.168.0.100/enki/recibe.php',this.datos,options).map(res => res.text()).subscribe(data => {alert("ok"+data);},err =>{alert("Error! Form cliente:"+err);});
    this.http.post(url,this.datos,options).map(res => res.json()).subscribe(data => {
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
    },err =>{
      let toast = this.toastCtrl.create({
        message: 'Error! Form cliente:'+err,
        duration: 5000,
        position:'middle'
      });
      toast.present();
      //alert("Error! Form cliente:"+err);
    });
  }

  fotoLicencia(){
    const fileTransfer = new Transfer();
    var optFileLicencia:any;
    var url="http://192.168.0.100/enki/recibirImg.php";
    //fotoLicencia
    optFileLicencia= {
     fileKey: 'imagen',
     fileName: this.fotolicencia
    }
    fileTransfer.upload(this.fotolicencia,url, optFileLicencia)
    .then((data) => {
       //alert("subido: "+JSON.stringify(data.response));
        this.fotoProfesional();
    }, (err) => {
       // error
       let toast = this.toastCtrl.create({
         message: 'Error! foto licencia: '+err,
         duration: 5000,
         position:'middle'
       });
       toast.present();
       //alert("Error Foto licencia: "+ JSON.stringify(err));
    })
  }

  fotoProfesional(){
    const fileTransfer = new Transfer();
    var optFileProfesional:any;
    var url="http://192.168.0.100/enki/recibirImg.php";
    //fotoLicencia
    optFileProfesional= {
     fileKey: 'imagen',
     fileName: this.fotoprofesional
    }
    fileTransfer.upload(this.fotoprofesional,url, optFileProfesional)
    .then((data) => {
       //alert("subido: "+JSON.stringify(data.response));
       this.enviarFormProfesional();
    }, (err) => {
       // error
       let toast = this.toastCtrl.create({
         message: 'Error! Foto Profesional: '+err,
         duration: 5000,
         position:'middle'
       });
       toast.present();
       //alert("Error: Foto profesional"+ JSON.stringify(err));
    })
  }

}
