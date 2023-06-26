import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public mostrarRegistro: boolean = false;
  public mostrarInicioSesion: boolean = false;

  
  cerrarSesion(){
    this.route.navigateByUrl("bienvenido") ; 
    this.authService.botonesNav=true;
  }
  
  
  mostraFormRegistro() {
    this.authService.mostrarRegistro = true;
    this.authService.mostrarInicioSesion = false;
  }
  
  mostraFormIniciarSesion() {
    this.authService.mostrarRegistro = false;
    this.authService.mostrarInicioSesion = true;
  }

  //  ---------------------------------- ---------------------------------- CONSTRUCTOR ---------------------------------- ----------------------------------
  
  constructor(public authService: AuthServiceService, public route: Router,) {}

  
  //  ---------------------------------- ----------------------------------  -------------- ---------------------------------- ----------------------------------
}
