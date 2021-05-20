import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PersonaService } from "src/app/services/persona.service";
import * as personasActions from '../actions/';

@Injectable()
export class PersonasEffects {

    constructor(private accions$: Actions,
        private _personasServices: PersonaService ){}


    personas$ = createEffect(
        () => this.accions$.pipe(
            ofType(personasActions.personas),
            mergeMap(
                () => this._personasServices.getPersonasTodas().pipe(
                    map(personasRes => personasActions.personasSuccess({personasRes})),
                    catchError(payload => of(personasActions.personasError({payload})))
                )
            )
        )
    ); 
}