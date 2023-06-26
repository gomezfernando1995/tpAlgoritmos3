import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { PagErrorComponent } from './componentes/pag-error/pag-error.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { RegistroExitosoComponent } from './componentes/registro-exitoso/registro-exitoso.component';
import { TokenGuard } from './guards/token.guard';
import { SideNavComponent } from './componentes/side-nav/side-nav.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';



const routes: Routes = 
  [
    {path:'',component:BienvenidoComponent},
    {path:'bienvenido',component:BienvenidoComponent,children:[{path:'login',component:LoginComponent}]},
    {path:'navbar',component:NavbarComponent},
    {path:'registrar',component:RegistrarComponent},
    {path:'registroExitoso',component:RegistroExitosoComponent,},
    {path:'login',component:LoginComponent},
    {path:'consumo',component:ConsumoComponent},
    {path:'paginaPrincipal',component:PaginaPrincipalComponent,canActivate: [TokenGuard]},
    {path:'sidebar',component:SideNavComponent},
    {path:'**',component:PagErrorComponent},

  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
