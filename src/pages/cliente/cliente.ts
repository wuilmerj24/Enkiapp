import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Sesioncliente } from '../../providers/sesioncliente';

@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html'
  //template:``
})

export class ClientePage {
  map: any;
  rootPage:any;
  public nombreCliente:any;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public alertCtrl:AlertController,platform: Platform, public clienteProvider: Sesioncliente) {
    platform.registerBackButtonAction(function () {
      //alert("si")
    }, 100);
  }


  ionViewDidLoad() {
    let locationOptions = {timeout: 10000, enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(
        (position) => {
            let options = {
              center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            this.map = new google.maps.Map(document.getElementById("map"), options);
            var contentString = '<button primary>Ionic button</button>';

            let infowindow = new google.maps.InfoWindow({
              content: contentString
            });

            let marker = new google.maps.Marker({
              position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              map: this.map,
              title: 'Uluru (Ayers Rock)'
            });
            marker.addListener('click', function() {
              infowindow.open(this.map, marker);
            });
        },

        (error) => {
            console.log(error);
            /*let alert = this.alertCtrl.create({
              title: 'Error GPS!',
              subTitle: 'Error: '+error,
              buttons: ['OK']
            });
            alert.present();*/
        }, locationOptions
    );
    console.log('Hello ClientePage Page');
    this.nombreCliente=this.clienteProvider.nombre+" "+this.clienteProvider.apellido;
    console.log(this.nombreCliente);
  }

}
