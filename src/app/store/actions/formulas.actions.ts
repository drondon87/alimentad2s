import { createAction, props } from '@ngrx/store';
import { PesoAjustadoReq } from 'src/app/models/PesoAjustadoReq.model';
import { PesoAjustadoRes } from '../../models/PesoAjustadoRes.model';
import { AntropediaAdultoReq } from '../../models/AntropediaAdultoReq.model';
import { AntropediaAdultoRes } from '../../models/AntropediaAdultoRes.model';
import { RequerimientoAdultoReq } from 'src/app/models/RequerimientoAdultoReq.model';
import { RequerimientoAdultoRes } from 'src/app/models/RequerimientoAdultoRes.model';
import { FormulaDieteticaReq } from '../../models/FormulaDieteticaReq.model';
import { FormulaDieteticaRes } from '../../models/FormulaDieteticaRes.model';

export const pesoAjustado = createAction('[Formulas] Peso Ajustado', props<{pesoAjustadoReq: PesoAjustadoReq}>());
export const pesoAjustadoSuccess = createAction('[Formulas] Peso Ajustado Success', props<{pesoAjustadoRes: PesoAjustadoRes}>());
export const pesoAjustadoError = createAction('[Formulas] Peso Ajustado Error', props<{payload: any}>());
export const pesoAjustadoReset = createAction('[Formulas] Peso Ajustado Reset');

export const antropediaAdulto = createAction('[Formulas] Antropedia Adulto', props<{antropediaAdultoReq: AntropediaAdultoReq}>());
export const antropediaAdultoSuccess = createAction('[Formulas] Antropedia Adulto Success', props<{antropediaAdultoRes: AntropediaAdultoRes}>());
export const antropediaAdultoError = createAction('[Formulas] Antropedia Adulto Error', props<{payload: any}>());
export const antropediaAdultoReset = createAction('[Formulas] Antropedia Adulto Reset');

export const requerimientoAdulto = createAction('[Formulas] Requerimiento Adulto', props<{requerimientoAdultoReq: RequerimientoAdultoReq}>());
export const requerimientoAdultoSuccess = createAction('[Formulas] Requerimiento Adulto Success', props<{requerimientoAdultoRes: RequerimientoAdultoRes}>());
export const requerimientoAdultoError = createAction('[Formulas] Requerimiento Adulto Error', props<{payload: any}>());
export const requerimientoAdultoReset = createAction('[Formulas] Requerimiento Adulto Reset');

export const formulaDietetica = createAction('[Formulas] Formula Dietética', props<{formulaDieteticaReq: FormulaDieteticaReq}>());
export const formulaDieteticaSuccess = createAction('[Formulas] Formula Dietética Success', props<{formulaDieteticaRes: FormulaDieteticaRes}>());
export const formulaDieteticaError = createAction('[Formulas] Formula Dietética Error', props<{payload: any}>());
export const formulaDieteticaReset = createAction('[Formulas] Formula Dietética Reset');