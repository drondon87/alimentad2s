import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers/';


export interface AppState {
    userLogin: reducers.UserloginState
}

export const appReducers: ActionReducerMap<AppState> = {
    userLogin: reducers.userloginReducer
}