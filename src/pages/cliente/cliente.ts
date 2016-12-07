import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html'
  //template:``
})

export class ClientePage {
  map: any;
  rootPage:any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public alertCtrl:AlertController) {
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
            let alert = this.alertCtrl.create({
              title: 'Error GPS!',
              subTitle: 'Error: '+error,
              buttons: ['OK']
            });
            alert.present();
        }, locationOptions
    );
    console.log('Hello ClientePage Page');
  }

}
