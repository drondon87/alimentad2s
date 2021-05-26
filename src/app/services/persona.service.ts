import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/PersonaRes.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private BASE_URL = environment.base_url;
  private PERSONA = this.BASE_URL + '/persona';

  constructor(private _httpClient: HttpClient) { }

  public getPersonas() {
    return this._httpClient.get<Persona[]>(this.PERSONA+'/activas')
    .pipe(catchError(this.errorHandler));
  }

  public getPersonasTodas() {
    return this._httpClient.get<Persona[]>(this.PERSONA)
    .pipe(
      map((resp: any) =>{
        const personas: Persona[] = resp; 
        for(let persona of personas){
          const estatus = (persona.activo) ? 'Activo' : 'Inactivo';
          persona.status = estatus;
        }
        return personas;
      }),
      catchError(this.errorHandler)
    );
  }

  public getPersonaSeleccionada(id: string){
    return this._httpClient.get<Persona>(this.PERSONA +'/'+ id)
    .pipe(catchError(this.errorHandler));
  }

  public guardarPersona(persona: Persona){
    return this._httpClient.post<Persona>(this.PERSONA, persona)
    .pipe(catchError(this.errorHandler));
  }

  public deletePersonaSeleccionada(id: string){
    return this._httpClient.delete<Persona>(this.PERSONA +'/'+ id)
    .pipe(catchError(this.errorHandler));
  }

  public desactivarPersona(id: string){
    return this._httpClient.put<Persona>(this.PERSONA +'/desactivar/'+ id, null)
    .pipe(catchError(this.errorHandler));
  }

  public modificarPersona(persona: Persona){
    return this._httpClient.put<Persona>(this.PERSONA +'/'+ persona.id, persona)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    throwError(error);
    return of(error)
  }
}
