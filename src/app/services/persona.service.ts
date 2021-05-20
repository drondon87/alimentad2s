import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PersonaRes } from '../models/PersonaRes.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private BASE_URL = 'http://localhost:8080/api/v1';
  private PERSONA = this.BASE_URL + '/persona';

  constructor(private _httpClient: HttpClient) { }

  public getPersonas() {
    return this._httpClient.get<PersonaRes[]>(this.PERSONA+'/activas')
    .pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }

  public getPersonasTodas() {
    return this._httpClient.get<PersonaRes[]>(this.PERSONA)
    .pipe(
      map((resp: any) =>{
        const personas: PersonaRes[] = resp; 
        for(let persona of personas){
          const estatus = (persona.activo) ? 'Activo' : 'Inactivo';
          persona.status = estatus;
        }
        return personas;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
