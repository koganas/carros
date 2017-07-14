import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EsportivosPage } from '../pages/esportivos/esportivos';
import { LuxoPage } from '../pages/luxo/luxo';
import { ClassicosPage } from '../pages/classicos/classicos';
import { TabsPage } from '../pages/tabs/tabs';
import { DetalhesPage } from '../pages/detalhes/detalhes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarroService } from '../providers/carro-service/carro-service';

@NgModule({
  declarations: [
    MyApp,
    EsportivosPage,
    LuxoPage,
    ClassicosPage,
    TabsPage,
    DetalhesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EsportivosPage,
    LuxoPage,
    ClassicosPage,
    TabsPage,
    DetalhesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarroService
  ]
})
export class AppModule {}
