import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarroService } from '../../providers/carro-service/carro-service';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [CarroService]  
})
export class AboutPage {
  carros: Array<{id: number, nome: string, desc: string, urlFoto: string}>
  constructor(public navCtrl: NavController, public carroService: CarroService) {
    this.carroService.loadLuxo()
    .then(data => {
      this.carros = data;
    });
  }
  viewCarro(event, item) {
    this.navCtrl.push(DetalhesPage, {
      item: item
    });
  }
}
