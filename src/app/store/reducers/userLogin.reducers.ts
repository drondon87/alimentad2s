import { createReducer, on } from '@ngrx/store';
import { UserLogin } from 'src/app/models/UserLogin.model';
import { loginUser, loginUserSuccess, loginUserError } from '../actions/';
import { logoutUser } from '../actions/userLogin.actions';

export interface UserloginState {
    userLogin: UserLogin,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const userLoginInitialState: UserloginState = {
    userLogin: null,
    loaded: false,
    loading: false,
    error: null
}

const _userloginReducer = createReducer(userLoginInitialState,

    on(loginUser, (state, { username, password } ) => ({ ...state, error: null})),
    on(loginUserSuccess, (state, { userLogin }) => ({ 
        ...state, 
        loading: false, 
        loaded: true, 
        userLogin: {...userLogin},
        error: null
    })),
    on(loginUserError, (state, { payload }) => ({ 
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
        userLogin: null
    })),
    on(logoutUser, state => ({ ...state, userLogin: null,
        loaded: false,
        loading: false,
        error: null}))

);

export function userloginReducer(state, action) {
    return _userloginReducer(state, action);
}