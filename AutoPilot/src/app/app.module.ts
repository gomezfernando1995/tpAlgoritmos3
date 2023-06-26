import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy,  } from '@angular/common';


//COMPONENTES
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PagErrorComponent } from './componentes/pag-error/pag-error.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { ConsumoComponent } from './consumo/consumo.component';
//MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

//FORM
import {FormControl,Validators,FormsModule,ReactiveFormsModule,} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { RegistroExitosoComponent } from './componentes/registro-exitoso/registro-exitoso.component';
import { SideNavComponent } from './componentes/side-nav/side-nav.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';

//DIRECTIVAS
import { ImgErrorDirective } from './directivas/img-error.directive';
import { CambiarCursorDirective } from './directivas/cambiar-cursor.directive';

import { JwtModule } from '@auth0/angular-jwt';
import { CocheComponent } from './componentes/coche/coche.component';
export function tokenGetter() {
  return JSON.parse(localStorage.getItem("localUsuario")??"").token;
}



@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    NavbarComponent,
    PagErrorComponent,
    LoginComponent,
    RegistrarComponent,
    ConsumoComponent,
    RegistroExitosoComponent,
    SideNavComponent,
    PaginaPrincipalComponent,
    ImgErrorDirective,
    CambiarCursorDirective,
    CocheComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7200"],
        disallowedRoutes: [],
      }}),
    //-----MATERIAL----------
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    LayoutModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatAutocompleteModule,
    //-----------------------
    
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


