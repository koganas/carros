import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarroService } from '../../providers/carro-service/carro-service';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-luxo',
  templateUrl: 'luxo.html',
  providers: [CarroService]
})
export class LuxoPage {
  carros: Array<{id: number, nome: string, desc: string, urlFoto: string}>
  constructor(public navCtrl: NavController, public carroService: CarroService) {
    this.carroService.loadEsporte()
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
