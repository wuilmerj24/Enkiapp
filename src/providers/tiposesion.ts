import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Sesioncliente } from '../providers/sesioncliente';
import { Sesionprofesional } from '../providers/sesionprofesional';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Tiposesion {
  public correoSesion:any="";
  public claveSesion:any="";
  public datos:any="";
  public resultadoSesion:any="";
  constructor(public http: Http, public toastCtrl:ToastController, public providerCliente: Sesioncliente, public providerProfesional: Sesionprofesional) {
    console.log('Hello Tiposesion Provider');
  }

  iniciar(){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let url='http://192.168.0.100/enki/recibe.php';
    this.datos="tipo=iniciarSesion&usuario="+this.correoSesion+"&clave="+this.claveSesion;
    //this.http.post('http://192.168.0.100/enki/recibe.php',this.datos,options).map(res => res.text()).subscribe(data => {alert("ok"+data);},err =>{alert("Error! Form cliente:"+err);});
    this.http.post(url,this.datos,options).map(res => res.json()).subscribe(data => {
      this.resultadoSesion=data[0].estado;
      let mensaje:any="";
      if(data[0].estado==0){
        mensaje="Ok sesion profesional"+data[0].estado;
      }else if(data[0].estado==1){
        mensaje="Ok sesion cliente"+data[0].estado;
        //variables del provider del cliente
        this.providerCliente.idUsuario=data[0].id;
        this.providerCliente.clave=data[0].clave;
        this.providerCliente.correo=data[0].correo;
        this.providerCliente.nombre=data[0].nombre;
        this.providerCliente.apellido=data[0].apellido;
        this.providerCliente.direccion=data[0].direccion;
        this.providerCliente.ciudad=data[0].ciudad;
        this.providerCliente.codigopostal=data[0].codigopostal;
        this.providerCliente.telefono=data[0].telefono;
        this.providerCliente.pais=data[0].pais;
        this.providerCliente.bandera=data[0].id_bandera;
        this.providerCliente.resultadoCliente=data[0].estado;
        this.traerTDC();
      }else if(data[0].estado==2){
        mensaje="Error sesion "+data[0].estado;
      }

      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 3000,
        position:'top'
      });
        toast.present();
      },err =>{
      let toast = this.toastCtrl.create({
        message: 'Error! Form cliente:'+err,
        duration: 3000,
        position:'top'
      });
      toast.present();
      //alert("Error! Form cliente:"+err);
    });
  }

  traerTDC(){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let url='http://192.168.0.100/enki/recibe.php';
    this.datos="tipo=traerTDC&idUsuario="+this.providerCliente.idUsuario;
    //this.http.post('http://192.168.0.100/enki/recibe.php',this.datos,options).map(res => res.text()).subscribe(data => {alert("ok"+data);},err =>{alert("Error! Form cliente:"+err);});
    this.http.post(url,this.datos,options).map(res => res.json()).subscribe(data => {
      for(let i in data){
        this.providerCliente.tipoTDC=[{tipo:data[i].tipo}];
        this.providerCliente.nombreTDC==[{tipo:data[i].nombre}];
        this.providerCliente.numeroTDC==[{tipo:data[i].numero}];
        this.providerCliente.mesTDC==[{tipo:data[i].mes}];
        this.providerCliente.anioTDC==[{tipo:data[i].anio}];
        this.providerCliente.cvvTDC==[{tipo:data[i].cvv}];
      }
        /*
        //datos tarjeta de credito
        public id:any="";
        public idTDC:any="";
        public tipoTDC:any="";
        public nombreTDC:any="";
        public numeroTDC:any="";
        public mesTDC:any="";
        public anioTDC:any="";
        public cvvTDC:any="";
        */

      },err =>{
      let toast = this.toastCtrl.create({
        message: 'Error! Form cliente:'+err,
        duration: 3000,
        position:'top'
      });
      toast.present();
      //alert("Error! Form cliente:"+err);
    });
  }
}
