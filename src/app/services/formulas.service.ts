import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PesoAjustadoReq } from '../models/PesoAjustadoReq.model';
import { PesoAjustadoRes } from '../models/PesoAjustadoRes.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  private BASE_URL = environment.base_url;
  private FORMULA = this.BASE_URL + '/formula';
  private PESO_AJUSTADO = this.FORMULA + '/pesoAjustado';

  constructor(private _httpClient: HttpClient) { }

  getPesoAjustado(pesoAjustado: PesoAjustadoReq){
    return this._httpClient.post<PesoAjustadoRes>(this.PESO_AJUSTADO, pesoAjustado)
    .pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }
}