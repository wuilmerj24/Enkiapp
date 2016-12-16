import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

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

  constructor(public http: Http) {
    console.log('Hello Usuario Provider');
  }

  enviarFormUsuario(){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    this.datos="tipo=registrarUsuario&correo="+this.correo+"&clave="+this.clave+"&nombre="+this.nombre+"&apellido="+this.apellido+"&direccion="+this.ciudad+"&codPostal="+this.codigopostal+"&telefono="+this.telefono+"&pais="+this.pais+"&nombreTDC="+this.nombreTDC+"&numeroTDC="+this.numeroTDC+"&mmTDC="+this.mmTDC+"&aaTDC="+this.aaTDC+"&cvvTDC="+this.cvvTDC+"&codigo="+this.codigo;

    this.http.post('http://developerwym.com.ve/enki/recibe.php',this.datos,options).map(res => res.json()).subscribe(
      data => {
        console.log(data.data);
      },err =>{
        console.log("Error!:",err);
      } 
    );
  }
}
