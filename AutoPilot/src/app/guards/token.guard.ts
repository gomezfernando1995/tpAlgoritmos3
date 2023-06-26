import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../componentes/login/login.component';
import { AuthServiceService } from '../auth-service.service';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate, CanDeactivate<unknown> {

  public salida = false;
  constructor(private authService: AuthServiceService, private router: Router) {}
  
 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  
      return this.salida;
      
  }
  canDeactivate<T>(
    component: T,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  this.salida /*|| nextState.url.indexOf('registrar') >0 */;
  }
  
}
