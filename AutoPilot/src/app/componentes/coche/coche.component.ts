import { Component, Input } from '@angular/core';
import { ClaseCoche } from 'src/app/clases/coche';
@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})


export class CocheComponent {


  @Input()
  public miCoche:ClaseCoche;

  constructor(){
    this.miCoche=new ClaseCoche;
  }

}
