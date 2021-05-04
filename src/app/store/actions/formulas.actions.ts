import { createAction, props } from '@ngrx/store';
import { PesoAjustadoReq } from 'src/app/models/PesoAjustadoReq.model';
import { PesoAjustadoRes } from '../../models/PesoAjustadoRes.model';
import { AntropediaAdultoReq } from '../../models/AntropediaAdultoReq.model';
import { AntropediaAdultoRes } from '../../models/AntropediaAdultoRes.model';

export const pesoAjustado = createAction('[Formulas] Peso Ajustado', props<{pesoAjustadoReq: PesoAjustadoReq}>());
export const pesoAjustadoSuccess = createAction('[Formulas] Peso Ajustado Success', props<{pesoAjustadoRes: PesoAjustadoRes}>());
export const pesoAjustadoError = createAction('[Formulas] Peso Ajustado Error', props<{payload: any}>());
export const pesoAjustadoReset = createAction('[Formulas] Peso Ajustado Reset');

export const antropediaAdulto = createAction('[Formulas] Antropedia Adulto', props<{antropediaAdultoReq: AntropediaAdultoReq}>());
export const antropediaAdultoSuccess = createAction('[Formulas] Antropedia Adulto Success', props<{antropediaAdultoRes: AntropediaAdultoRes}>());
export const antropediaAdultoError = createAction('[Formulas] Antropedia Adulto Error', props<{payload: any}>());
export const antropediaAdultoReset = createAction('[Formulas] Antropedia Adulto Reset');