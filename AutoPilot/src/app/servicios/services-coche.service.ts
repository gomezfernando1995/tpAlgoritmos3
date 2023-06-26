import { Injectable } from '@angular/core';
import { ClaseCoche, TipoCoche } from '../clases/coche';

@Injectable({
  providedIn: 'root'
})
export class ServicesCocheService {

  private coche:ClaseCoche[];

  getCoche():ClaseCoche[]{
    return this.coche;
  }
  
  deleteCoche():void{
    this.coche.pop();
  }

  constructor() {
    this.coche = [];
    this.coche.push(<ClaseCoche>{ marca:'Chevrolet',nombre:'Corsa',precio:1500000 , tipoCoche: TipoCoche.Sedán  });
    this.coche.push(<ClaseCoche>{ marca:'Fiat',nombre:'Palio',precio:1000000 , tipoCoche: TipoCoche.Sedán  });
   }
}
