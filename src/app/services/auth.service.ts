import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { from, of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient,
              private store: Store) { }

  loginUsuario(username, password){

    return this._httpClient.post<any>(environment.authenticate,{username,password})
    .pipe(
      map(
        userData => {
         sessionStorage.setItem('username', username);
         let tokenStr = 'Bearer ' + userData.token;
         sessionStorage.setItem('token', tokenStr);
         return {...userData, user: 'Admin', name: 'Administrador', activo: true};
        }
      ),
      catchError(err => {
         return throwError(err);
       })
     );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');

    return !(user === null);
  }

  isUserLogged() {
    let user = sessionStorage.getItem('username');
    if(user){
      return of(true);
    } else{
      return of(false);
    }
    
   }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    this.store.dispatch( actions.logoutUser());
    this.store.dispatch( actions.pesoAjustadoReset());
    this.store.dispatch( actions.antropediaAdultoReset());
  }
}
