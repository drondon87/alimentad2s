import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PesoAjustadoReq } from '../models/PesoAjustadoReq.model';
import { PesoAjustadoRes } from '../models/PesoAjustadoRes.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AntropediaAdultoReq } from '../models/AntropediaAdultoReq.model';
import { AntropediaAdultoRes } from '../models/AntropediaAdultoRes.model';
import { Met } from '../models/Met.model';
import { RequerimientoAdultoReq } from '../models/RequerimientoAdultoReq.model';
import { RequerimientoAdultoRes } from '../models/RequerimientoAdultoRes.model';
import { FormulaDieteticaReq } from '../models/FormulaDieteticaReq.model';
import { FormulaDieteticaRes } from '../models/FormulaDieteticaRes.model';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  private BASE_URL = environment.base_url;
  private FORMULA = this.BASE_URL + '/formula';
  private PESO_AJUSTADO = this.FORMULA + '/pesoAjustado';
  private ANTROPEDIA_ADULTO = this.FORMULA + '/antropometriaAdulto';
  private METS = this.FORMULA + '/mets';
  private REQUERIMIENTO_ADULTO = this.FORMULA + '/requerimientoAdulto';
  private FORMULA_DIETETICA = this.FORMULA + '/formulaDietetica';
  
  constructor(private _httpClient: HttpClient) { }

  getPesoAjustado(pesoAjustado: PesoAjustadoReq){
    return this._httpClient.post<PesoAjustadoRes>(this.PESO_AJUSTADO, pesoAjustado)
    .pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }

  public getAntropediaAdultos(antroAdultoReq: AntropediaAdultoReq) {
    return this._httpClient.post<AntropediaAdultoRes>(this.ANTROPEDIA_ADULTO, antroAdultoReq)
    .pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }

  public getMets() {
    return this._httpClient.get<Met>(this.METS)
    .pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }

  public getRequerimientoAdultos(requerimientoAdultoReq: RequerimientoAdultoReq) {
    return this._httpClient.post<RequerimientoAdultoRes>(this.REQUERIMIENTO_ADULTO, requerimientoAdultoReq)
    .pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }

  public getFormulaDietetica(formulaDieteticaReq: FormulaDieteticaReq) {
    return this._httpClient.post<FormulaDieteticaRes>(this.FORMULA_DIETETICA, formulaDieteticaReq)
    .pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
