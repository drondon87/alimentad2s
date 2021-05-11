import { createReducer, on } from '@ngrx/store';
import { PesoAjustadoRes } from 'src/app/models/PesoAjustadoRes.model';
import { antropediaAdulto, antropediaAdultoSuccess, pesoAjustado, pesoAjustadoError, pesoAjustadoReset, pesoAjustadoSuccess } from '../actions/';
import { AntropediaAdultoRes } from '../../models/AntropediaAdultoRes.model';
import { antropediaAdultoError, antropediaAdultoReset, requerimientoAdulto, requerimientoAdultoError, requerimientoAdultoReset, requerimientoAdultoSuccess } from '../actions/formulas.actions';
import { RequerimientoAdultoRes } from 'src/app/models/RequerimientoAdultoRes.model';

export interface PesoAjustadoState {
    pesoAjustado: PesoAjustadoRes,
    loaded: boolean,
    loading: boolean,
    error: any
}

export interface AntropediaAdultoState {
    antropediaAdulto: AntropediaAdultoRes,
    loaded: boolean,
    loading: boolean,
    error: any
}

export interface RequerimientoAdultoState {
    requerimientoAdulto: RequerimientoAdultoRes,
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

export const antropediaAdultoInitialState: AntropediaAdultoState = {
    antropediaAdulto: null,
    loaded: false,
    loading: false,
    error: null
}

export const requerimientoAdultoInitialState: RequerimientoAdultoState = {
    requerimientoAdulto: null,
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

const _antropediaAdultoReducer = createReducer(antropediaAdultoInitialState,

    on(antropediaAdulto, (state, { antropediaAdultoReq } ) => ({ ...state, error: null})),
    on(antropediaAdultoSuccess, (state, { antropediaAdultoRes }) => ({ 
        ...state, 
        loading: false, 
        loaded: true, 
        antropediaAdulto: {...antropediaAdultoRes},
        error: null
    })),
    on(antropediaAdultoError, (state, { payload }) => ({ 
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
        antropediaAdulto: null
    })),
    on(antropediaAdultoReset, state => ({ ...state, antropediaAdulto: null,
        loaded: false,
        loading: false,
        error: null}))

);

const _requerimeintoAdultoReducer = createReducer(requerimientoAdultoInitialState,

    on(requerimientoAdulto, (state, { requerimientoAdultoReq } ) => ({ ...state, error: null})),
    on(requerimientoAdultoSuccess, (state, { requerimientoAdultoRes }) => ({ 
        ...state, 
        loading: false, 
        loaded: true, 
        requerimientoAdulto: {...requerimientoAdultoRes},
        error: null
    })),
    on(requerimientoAdultoError, (state, { payload }) => ({ 
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
        requerimientoAdulto: null
    })),
    on(requerimientoAdultoReset, state => ({ ...state, requerimientoAdulto: null,
        loaded: false,
        loading: false,
        error: null}))

);

export function pesoAjustadoReducer(state, action) {
    return _pesoAjustadoReducer(state, action);
}

export function antropediaAdultoReducer(state, action) {
    return _antropediaAdultoReducer(state, action);
}

export function requerimientoAdultoReducer(state, action) {
    return _requerimeintoAdultoReducer(state, action);
}