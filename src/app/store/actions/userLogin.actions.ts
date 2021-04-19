import { createAction, props } from '@ngrx/store';
import { UserLogin } from 'src/app/models/UserLogin.model';

export const loginUser = createAction('[User Login] Login User', props<{username: string, password: string}>());
export const loginUserSuccess = createAction('[User Login] Login User Success', props<{userLogin: UserLogin}>());
export const loginUserError = createAction('[User Login] Login User Error', props<{payload: any}>());