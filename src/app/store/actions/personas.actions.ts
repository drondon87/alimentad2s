import { createAction, props } from "@ngrx/store";
import { PersonaRes } from '../../models/PersonaRes.model';

export const personas = createAction('[Personas] Personas');
export const personasSuccess = createAction('[Personas] Personas Success', props<{personasRes: PersonaRes[]}>());
export const personasError = createAction('[Personas] Personas Error', props<{payload: any}>());
export const personasReset = createAction('[Personas] Personas Reset');