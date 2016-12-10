import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DataTest } from '../../providers/data-test';
//import { ProfesionaliPage } from '../profesionali/profesionali';
import { CameraPreview, CameraPreviewRect } from 'ionic-native';

@Component({
  selector: 'page-profesionalh',
  templateUrl: 'profesionalh.html',
})
export class ProfesionalhPage {
  constructor(public navCtrl: NavController,public datatest: DataTest) {

  }

  tomarFotoFace(){
    let cameraRect: CameraPreviewRect = {
      x: 80,
      y: 80,
      width: 200,
      height: 230
    };

    CameraPreview.startCamera(
      cameraRect, // position and size of preview
      'back', // default camera
      //'front', // default camera
      true, // tap to take picture
      false, // disable drag
      true, // keep preview in front. Set to true (back of the screen) to apply overlaying elements
      1 // set the preview alpha
    );

    CameraPreview.setColorEffect('none');
    //this.navCtrl.push(ProfesionaliPage);
  }

  capturarImagen(){
    CameraPreview.setOnPictureTakenHandler().subscribe((result) => {
      console.log(result);
      // do something with the result
    });
  }

  ionViewDidLoad() {
    console.log('Hello ProfesionalhPage Page');
  }

}
