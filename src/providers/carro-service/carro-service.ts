import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CarroServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CarroService {
	carros:any;
	carro:any;
	constructor(public http: Http) {
		console.log('Hello CarroService Provider');
	}

	loadClassicos() {
	  if (this.carros) {
	    return Promise.resolve(this.carros);
	  }
	  return new Promise(resolve => {
	    this.http.get('http://livrowebservices.com.br/rest/carros/tipo/classicos')
	      .map(res => res.json())
	      .subscribe(data => {
	        this.carros = data;
	        resolve(this.carros);
	      });
	  });
	}
	loadEsporte() {
	  if (this.carros) {
	    return Promise.resolve(this.carros);
	  }
	  return new Promise(resolve => {
	    this.http.get('http://livrowebservices.com.br/rest/carros/tipo/esportivos')
	      .map(res => res.json())
	      .subscribe(data => {
	        this.carros = data;
	        resolve(this.carros);
	      });
	  });
	}
	loadLuxo() {
	  if (this.carros) {
	    return Promise.resolve(this.carros);
	  }
	  return new Promise(resolve => {
	    this.http.get('http://livrowebservices.com.br/rest/carros/tipo/luxo')
	      .map(res => res.json())
	      .subscribe(data => {
	        this.carros = data;
	        resolve(this.carros);
	      });
	  });
	}

}
