import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SesionPage } from '../pages/sesion/sesion';
import { ClientePage } from '../pages/cliente/cliente';
import { RecuperarPage } from '../pages/recuperar/recuperar';
import { TiporegistroPage } from '../pages/tiporegistro/tiporegistro';
import { UsuarioaPage } from '../pages/usuarioa/usuarioa';
import { UsuariobPage } from '../pages/usuariob/usuariob';
import { UsuariocPage } from '../pages/usuarioc/usuarioc';
import { UsuariodPage } from '../pages/usuariod/usuariod';
import { UsuarioePage } from '../pages/usuarioe/usuarioe';
import { ProfesionalaPage } from '../pages/profesionala/profesionala';
import { ProfesionalbPage } from '../pages/profesionalb/profesionalb';
import { ProfesionalcPage } from '../pages/profesionalc/profesionalc';
import { ProfesionaldPage } from '../pages/profesionald/profesionald';
import { ProfesionalePage } from '../pages/profesionale/profesionale';
import { ProfesionalfPage } from '../pages/profesionalf/profesionalf';
import { ProfesionalgPage } from '../pages/profesionalg/profesionalg';
import { ProfesionalhPage } from '../pages/profesionalh/profesionalh';
import { ProfesionaliPage } from '../pages/profesionali/profesionali';
import { ProfesionaljPage } from '../pages/profesionalj/profesionalj';
import { ProfesionalkPage } from '../pages/profesionalk/profesionalk';
import { DataTest } from '../providers/data-test';
import { Usuario } from '../providers/usuario';
import { Tiposesion } from '../providers/tiposesion';
import { Sesioncliente } from '../providers/sesioncliente';
import { Sesionprofesional } from '../providers/sesionprofesional';
import { TextMaskModule } from '../../node_modules/angular2-text-mask/src/angular2TextMask';
import { ModalPage } from '../pages/modal/modal';
import { EmpresaPage } from '..pages/empresa/empresa';
import { EmpresabPage } from '..pages/empresab/empresab';
import { EmpresacPage } from '..pages/empresac/empresac';
import { EmpresadPage } from '..pages/empresad/empresad';
import { EmpresaePage } from '..pages/empresae/empresae';
import { EmpresafPage } from '..pages/empresaf/empresaf';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SesionPage,
    ClientePage,
    RecuperarPage,
    TiporegistroPage,
    UsuarioaPage,
    UsuariobPage,
    UsuariocPage,
    UsuariodPage,
    UsuarioePage,
    ProfesionalaPage,
    ProfesionalbPage,
    ProfesionalcPage,
    ProfesionaldPage,
    ProfesionalePage,
    ProfesionalfPage,
    ProfesionalgPage,
    ProfesionalhPage,
    ProfesionaliPage,
    ProfesionaljPage,
    ProfesionalkPage,
    ModalPage,
    EmpresaPage,
    EmpresabPage,
    EmpresacPage,
    EmpresadPage,
    EmpresaePage,
    EmpresafPage
  ],
  imports: [
    TextMaskModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SesionPage,
    ClientePage,
    RecuperarPage,
    TiporegistroPage,
    UsuarioaPage,
    UsuariobPage,
    UsuariocPage,
    UsuariodPage,
    UsuarioePage,
    ProfesionalaPage,
    ProfesionalbPage,
    ProfesionalcPage,
    ProfesionaldPage,
    ProfesionalePage,
    ProfesionalfPage,
    ProfesionalgPage,
    ProfesionalhPage,
    ProfesionaliPage,
    ProfesionaljPage,
    ProfesionalkPage,
    ModalPage,
    EmpresaPage,
    EmpresabPage,
    EmpresacPage,
    EmpresadPage,
    EmpresaePage,
    EmpresafPage
  ],
  providers: [
    [DataTest],
    [Usuario],
    [Tiposesion],
    [Sesioncliente],
    [Sesionprofesional]
  ]
})
export class AppModule {}
