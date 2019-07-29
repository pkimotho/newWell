import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthorizationService } from '../../services/authorization.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthorizationService, private router: Router) {

  }

  canActivate() {
    if (!this.authService.loggedIn) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
