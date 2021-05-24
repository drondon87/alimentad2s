import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers/';


export interface AppState {
    userLogin: reducers.UserloginState,
    pesoAjustado: reducers.PesoAjustadoState,
    antropediaAdulto: reducers.AntropediaAdultoState,
    requerimientoAdulto: reducers.RequerimientoAdultoState,
    formulaDietetica: reducers.FormulaDieteticaState
}

export const appReducers: ActionReducerMap<AppState> = {
    userLogin: reducers.userloginReducer,
    pesoAjustado: reducers.pesoAjustadoReducer,
    antropediaAdulto: reducers.antropediaAdultoReducer,
    requerimientoAdulto: reducers.requerimientoAdultoReducer,
    formulaDietetica: reducers.formulaDieteticaReducer
}