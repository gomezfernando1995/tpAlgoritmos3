import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators,  FormGroup,} from '@angular/forms';
import { Usuario } from 'src/app/entidades/usuario/usuario';
import { AuthServiceService } from 'src/app/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent {

  public usuario = new Usuario();
  public email = new FormControl('', [Validators.required, Validators.email]);
  public hide = true;
  public checked = false;
  private emailPattern: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  private telPattern = /^[1-9]\d{6,10}$/;

  public miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    telefono: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(this.telPattern),
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
      Validators.maxLength(50),
    ]),

    nombreUsuario: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.passwordPattern),
      Validators.minLength(8),
    ]),

    terminos: new FormControl(this.checked, Validators.requiredTrue),
    //imagen: new FormControl(''),
  });

  //---------------------------------------- CONSTRUCTOR -----------------------------------------------------------------------------
  constructor(
    private router: Router,
    private authService: AuthServiceService,
    public http:HttpClient, 
    public jwt:JwtHelperService
  ) {}

  //------------------------------------------------------------------------------------------------------------------------ --------------

  //---------------------------------------- VALIDACIONES DE LOS INPUTS --------------------------------------------------------------------

  getErrorMessageEmail() {
    if (this.miFormulario.get('email')?.hasError('required')) {
      return 'Debes ingresar un correo';
    }
    return this.miFormulario.get('email')?.hasError('pattern')
      ? 'No es un email valido'
      : '';
  }

  getErrorMessageTelefono() {
    if (this.miFormulario.get('telefono')?.hasError('required')) {
      return 'Debes ingresar un teléfono';
    } else if (this.miFormulario.get('telefono')?.hasError('minlength')) {
      return 'El número no puede tener menos de 10 caracteres';
    } else if (this.miFormulario.get('telefono')?.hasError('maxlength')) {
      return 'El número no puede tener más de 10 caracteres';
    } else if (this.miFormulario.get('telefono')?.hasError('pattern')) {
      return 'No es un teléfono válido';
    }
    return '';
  }

  getErrorMessageUsuario() {
    if (this.miFormulario.get('nombreUsuario')?.hasError('required')) {
      return 'Debes ingresar un nombre de usuario';
    } else if (this.miFormulario.get('nombreUsuario')?.hasError('minlength')) {
      return 'El número no puede tener menos de 3 caracteres';
    } else if (this.miFormulario.get('nombreUsuario')?.hasError('maxlength')) {
      return 'El número no puede tener más de 50 caracteres';
    }
    return '';
  }
  getErrorMessagePassword() {
    if (this.miFormulario.get('password')?.hasError('required')) {
      return 'Debes crear una contraseña';
    } else if (this.miFormulario.get('password')?.hasError('minlength')) {
      return 'Debe tener almenos 8 caracteres ';
    } else if (this.miFormulario.get('password')?.hasError('pattern')) {
      return 'Debe estar constituida por almenos una mayuscula,minuscula y caracter especial';
    }
    return '';
  }
  getErrorMessageTerminos() {
    if (this.miFormulario.get('terminos')?.hasError('requiredTrue')) {
      return 'Debes aceptar terminos y condiciones para registrarte';
    }

    return '';
  }

  //---------------------------------------- FIN VALIDACIONES DE LOS INPUTS --------------------------------------------------------------------

  registrar() {
    var usuarios: Usuario[] = []; //SE CREA UN ARRAY DE USUARIOS
    var formulario = this.miFormulario.value;

    //SE TRAE EL ARRAY DE USUARIO EXISTENTES EN EL LOCAL O SINO TRAE UN ARRAY VACIO
    usuarios = JSON.parse(localStorage.getItem('localUsuario') ?? '[]');
    usuarios.push(formulario);

    localStorage.setItem('localUsuario', JSON.stringify(usuarios));
    this.router.navigate(['/login']);
  }
}
export class GridListHarnessExample {}
