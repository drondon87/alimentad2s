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

    antropediaAdulto$ = createEffect(
        () => this.accions$.pipe(
            ofType(formulasActions.antropediaAdulto),
            mergeMap(
               (action) => this._formulaServices.getAntropediaAdultos(action.antropediaAdultoReq).pipe(
                   map(antropediaAdultoRes => formulasActions.antropediaAdultoSuccess({antropediaAdultoRes})),
                   catchError(payload => of(formulasActions.antropediaAdultoError({payload})))
               ) 
            )
        )
    );

    requerimientoAdulto$ = createEffect(
        () => this.accions$.pipe(
            ofType(formulasActions.requerimientoAdulto),
            mergeMap(
                (action) => this._formulaServices.getRequerimientoAdultos(action.requerimientoAdultoReq).pipe(
                    map(requerimientoAdultoRes => formulasActions.requerimientoAdultoSuccess({requerimientoAdultoRes})),
                    catchError(payload => of(formulasActions.requerimientoAdultoError({payload})))
                )
            )
        )
    );

    formulaDietetica$ = createEffect(
        () => this.accions$.pipe(
            ofType(formulasActions.formulaDietetica),
            mergeMap(
                (action) => this._formulaServices.getFormulaDietetica(action.formulaDieteticaReq).pipe(
                    map(formulaDieteticaRes => formulasActions.formulaDieteticaSuccess({formulaDieteticaRes})),
                    catchError(payload => of(formulasActions.formulaDieteticaError({payload})))
                )
            )  
        )
    );

}