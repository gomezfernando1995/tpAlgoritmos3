import { Component } from '@angular/core';
import { TokenGuard } from 'src/app/guards/token.guard';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { CocheComponent } from '../coche/coche.component';
import { ClaseCoche,TipoCoche } from 'src/app/clases/coche';
import { ServicesCocheService } from 'src/app/servicios/services-coche.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  
  coches: ClaseCoche[];

  constructor( public route: Router,   public token: TokenGuard, public servicioCoches : ServicesCocheService,   private authService: AuthServiceService)
  {
    this.coches = servicioCoches.getCoche();
  }


  tiles: Tile[] = [
      { text: 'One', cols: 4, rows: 2, color: 'lightblue' },
      { text: 'Two', cols: 4, rows: 3, color: 'lightgreen' },
      { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
      { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  public salir() {
    this.token.salida = false;
    this.authService.botonesNav = true;
    this.route.navigateByUrl('/');
  }


  // public agregarAuto(){
  //   this.coche.
  // }
}
