import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { FormulasService } from "src/app/services/formulas.service";
import * as formulasActions from '../actions/';
import { of } from 'rxjs';

@Injectable()
export class FormulasEffects {

    constructor(private accions$: Actions,
        private _formulaServices: FormulasService ){}

    pesoAjustado$ = createEffect(
        () => this.accions$.pipe(
            ofType(formulasActions.pesoAjustado),
            mergeMap(
                (action) => this._formulaServices.getPesoAjustado(action.pesoAjustadoReq).pipe(
                    map(pesoAjustadoRes => formulasActions.pesoAjustadoSuccess({pesoAjustadoRes}) ),
                    catchError(payload => of(formulasActions.pesoAjustadoError({payload})))
                )
            )
        )
    );

}