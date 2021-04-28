import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers/';

export interface AppState {
    userLogin: reducers.UserloginState,
    pesoAjustado: reducers.PesoAjustadoState
}

export const appReducers: ActionReducerMap<AppState> = {
    userLogin: reducers.userloginReducer,
    pesoAjustado: reducers.pesoAjustadoReducer
}