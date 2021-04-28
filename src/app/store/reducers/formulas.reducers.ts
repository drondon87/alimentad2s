import { createReducer, on } from '@ngrx/store';
import { PesoAjustadoRes } from 'src/app/models/PesoAjustadoRes.model';
import { pesoAjustado, pesoAjustadoError, pesoAjustadoReset, pesoAjustadoSuccess } from '../actions/';

export interface PesoAjustadoState {
    pesoAjustado: PesoAjustadoRes,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const pesoAjustadoInitialState: PesoAjustadoState = {
    pesoAjustado: null,
    loaded: false,
    loading: false,
    error: null
}

const _pesoAjustadoReducer = createReducer(pesoAjustadoInitialState,

    on(pesoAjustado, (state, { pesoAjustadoReq } ) => ({ ...state, error: null})),
    on(pesoAjustadoSuccess, (state, { pesoAjustadoRes }) => ({ 
        ...state, 
        loading: false, 
        loaded: true, 
        pesoAjustado: {...pesoAjustadoRes},
        error: null
    })),
    on(pesoAjustadoError, (state, { payload }) => ({ 
        ...state, 
        loading: false, 
        loaded: false, 
        error: {
            status: payload.status,
            url: payload.url,
            name: payload.name,
            message: payload.error.message,
            ok: payload.ok,
        },
        pesoAjustado: null
    })),
    on(pesoAjustadoReset, state => ({ ...state, pesoAjustado: null,
        loaded: false,
        loading: false,
        error: null}))

);

export function pesoAjustadoReducer(state, action) {
    return _pesoAjustadoReducer(state, action);
}