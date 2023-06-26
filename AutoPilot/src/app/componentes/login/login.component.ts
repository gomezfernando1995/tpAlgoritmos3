import { Component } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TokenGuard } from 'src/app/guards/token.guard';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Usuario } from 'src/app/entidades/usuario/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {


  public hide = true;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public usuario: Usuario = new Usuario();
  public ingresado = false;
  public usuarioOEmail: string = '';

  //  ---------------------------------- CONSTRUCTOR ----------------------------------


  constructor(
    public route: Router,
    public token: TokenGuard,
    public http: HttpClient,
    public jwt: JwtHelperService,
    private authService: AuthServiceService,
  ) {}
  //  ----------------------------------     ----------------------------------

  public ingresar() {
        let usuario: Array<Usuario> = <Array<Usuario>>JSON.parse(localStorage.getItem("localUsuario") ?? "[]");
        console.log(localStorage.getItem("localUsuario"));
        let i = usuario.findIndex(x => x.nombreUsuario == this.usuario.nombreUsuario || x.email == this.usuario.email);
        console.log(this.usuario);
      
        if (i < 0){ return; }

        if (usuario[i].password == this.usuario.password)
        {
            this.token.salida =true;
            this.route.navigateByUrl("paginaPrincipal") ; 
            this.authService.botonesNav=false;
        }else{ console.log("Contraseña incorrecta")} 
  }

  public ingresarApi(){
    console.log(this.usuario);
    this.http.post<Usuario>("http://localhost:7200/login/",this.usuario)
    .subscribe(data=>{
        console.log(data);
        localStorage.setItem('localUsuario',JSON.stringify(data));
        var usuario = (this.jwt.decodeToken((<any>data).token)).data;
        console.info(usuario);
        this.token.salida =true;
        this.authService.botonesNav=false;
        this.token.salida = true;
        this.route.navigateByUrl("paginaPrincipal") ;
      
    } ); 
  }

  actualizarTipoEntrada() {
        if (this.usuarioOEmail.includes('@')) {
            this.usuario.email = this.usuarioOEmail;
        } else {
          this.usuario.nombreUsuario = this.usuarioOEmail;
        }
  } 

  getErrorMessage() {
    /*if (this.email.hasError('required')) {
      return 'Debe ingresar un correo';
    }*/
    return this.email.hasError('email') ? 'Ingrese un correo valido' : '';
  }



}
