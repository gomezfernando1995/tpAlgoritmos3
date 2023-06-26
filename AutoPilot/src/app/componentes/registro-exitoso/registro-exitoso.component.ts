import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,AbstractControl, FormControlName, FormGroup, ValidationErrors} from '@angular/forms';
import { Usuario } from 'src/app/entidades/usuario/usuario';
import { DatosPersonales } from 'src/app/entidades/datosPersonales/datos-personales';
import { LoginComponent } from '../login/login.component';

@Component({

  selector: 'app-registro-exitoso',
  templateUrl: './registro-exitoso.component.html',
  styleUrls: ['./registro-exitoso.component.scss']
})
export class RegistroExitosoComponent {
  public hide = true;
  constructor(public loginEx : LoginComponent){}

}
