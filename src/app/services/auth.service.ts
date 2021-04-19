import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

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

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }
}
