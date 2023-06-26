import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // ERA PARA MOSTRAR EL INICIO DE SESION Y EL REGISTRAR EN UN MISMO COMPONENTE 
  public mostrarRegistro: boolean = false;
  public mostrarInicioSesion: boolean = false;

  //HABILITA PARA EL REGISTRO EXITOSO
  public accesoEspecial: boolean = false;

  //MOSTRAR LINKS DEL NAV
  public botonesNav: boolean=true;


  constructor() { }
  
}


// ACORDATE DE AHCER FIJO UN  SIDE BAR Y EL BODY QUE SEA ME MODIFIQUE SEGUN INFOMACION HALLA