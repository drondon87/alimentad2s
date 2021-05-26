import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HistorialAntropediaAdulto } from '../models/Historial-Antropedia.model';
import { HistorialRequerimientoAdulto } from '../models/Historial-Requerimiento.model';
import { Persona } from '../models/PersonaRes.model';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private BASE_URL = environment.base_url;
  private HISTORIAL_ANTROPEDIA = this.BASE_URL + '/historialAntropedia';
  private HISTORIAL_REQUERIMIENTO = this.BASE_URL + '/historialRequerimiento';

  constructor( private httpClient: HttpClient) {}

  public getHistorialesAntropediaAdultoByPersona(idPersona: string) {
    return this.httpClient.get<HistorialAntropediaAdulto[]>(this.HISTORIAL_ANTROPEDIA +'/'+ idPersona)
      .pipe(catchError(this.errorHandler));
  }

  public getHistorialesAntropediaAdulto() {
    return this.httpClient.get<HistorialAntropediaAdulto[]>(this.HISTORIAL_ANTROPEDIA)
      .pipe(catchError(this.errorHandler));
  }

  public guardarHistorialAntropedia(request){
    return this.httpClient.post<any>(this.HISTORIAL_ANTROPEDIA, request)
      .pipe(catchError(this.errorHandler));
  }

  public deleteHistorial(request){
    return this.httpClient.delete<Persona>(this.HISTORIAL_ANTROPEDIA +'/'+ request)
      .pipe(catchError(this.errorHandler));
  }

  public getHistorialesRequerimientoAdulto() {
    return this.httpClient.get<HistorialRequerimientoAdulto[]>(this.HISTORIAL_REQUERIMIENTO)
      .pipe(catchError(this.errorHandler));
  }

  public getHistorialesRequerimientoAdultoByPersona(request) {
    return this.httpClient.get<HistorialRequerimientoAdulto[]>(this.HISTORIAL_REQUERIMIENTO +'/'+ request)
      .pipe(catchError(this.errorHandler));
  }

  public guardarHistorialRequerimiento(request){
    return this.httpClient.post<any>(this.HISTORIAL_REQUERIMIENTO, request);
  }

  public deleteHistorialRequerimeinto(request){
    return this.httpClient.delete<Persona>(this.HISTORIAL_REQUERIMIENTO +'/'+ request);
  }

  errorHandler(error: HttpErrorResponse) {
    throwError(error);
    return of(error)
  }
}
