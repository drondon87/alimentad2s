import { createReducer, on } from "@ngrx/store";
import { PersonaRes } from "src/app/models/PersonaRes.model";
import { personas, personasError, personasReset, personasSuccess } from "../actions";

export interface PersonasState {
    personas: PersonaRes[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const personasInitialState: PersonasState = {
    personas: null,
    loaded: false,
    loading: false,
    error: null
}

const _personasReducer = createReducer(personasInitialState,

    on(personas, state => ({ ...state, error: null})),
    on(personasSuccess, (state, { personasRes }) => ({ 
        ...state, 
        loading: false, 
        loaded: true, 
        personas: {...personasRes},
        error: null
    })),
    on(personasError, (state, { payload }) => ({ 
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
        personas: null
    })),
    on(personasReset, state => ({ ...state, personas: null,
        loaded: false,
        loading: false,
        error: null}))

);

export function personasReducer(state, action) {
    return _personasReducer(state, action);
}