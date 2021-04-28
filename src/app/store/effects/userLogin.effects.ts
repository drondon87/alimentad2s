import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { AuthService } from 'src/app/services/auth.service';
import * as userLoginActions from '../actions/';
import { of } from 'rxjs';

@Injectable()
export class UserLoginEffects {

    constructor(private accions$: Actions,
        private _authServices: AuthService ){}

    userLogin$ = createEffect(
        () => this.accions$.pipe(
            ofType(userLoginActions.loginUser),
            mergeMap(
                (action) => this._authServices.loginUsuario(action.username, action.password).pipe(
                    map(userLogin => userLoginActions.loginUserSuccess({userLogin}) ),
                    catchError(payload => of(userLoginActions.loginUserError({payload})))
                )
            )
        )
    );

}