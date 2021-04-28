import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(private router: Router,
              private _authService: AuthService ) { }
              
  canLoad(): Observable<boolean> {
    return this._authService.isUserLogged().pipe(
      tap(user => {
        if(!user){
          this.router.navigate(['/login'])
        }
      }),
      take(1)
    );
  }

  canActivate() {
    if (this._authService.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
