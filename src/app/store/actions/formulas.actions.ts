import { createAction, props } from '@ngrx/store';
import { PesoAjustadoReq } from 'src/app/models/PesoAjustadoReq.model';
import { PesoAjustadoRes } from '../../models/PesoAjustadoRes.model';

export const pesoAjustado = createAction('[Formulas] Peso Ajustado', props<{pesoAjustadoReq: PesoAjustadoReq}>());
export const pesoAjustadoSuccess = createAction('[Formulas] Peso Ajustado Success', props<{pesoAjustadoRes: PesoAjustadoRes}>());
export const pesoAjustadoError = createAction('[Formulas] Peso Ajustado Error', props<{payload: any}>());
export const pesoAjustadoReset = createAction('[Formulas] Peso Ajustado Reset');