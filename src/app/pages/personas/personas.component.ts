import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PersonaRes } from 'src/app/models/PersonaRes.model';
import { personas } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: []
})
export class PersonasComponent implements OnInit {

  personasSubs: Subscription;
  personasRes: PersonaRes[];
  loading: boolean;
  error: any;
  respuesta: boolean;

  constructor(private store: Store<AppState>,
              private _personasServices: PersonaService) { }

  ngOnInit() {

    //this._personasServices.getPersonasTodas().subscribe(resp => console.log(resp));
      
    this.store.dispatch(personas());

    this.personasSubs = this.store.select('personas').subscribe( ({personas, loading, error}) => {
      this.personasRes = personas;
      console.log(personas);
      this.loading = loading;
      this.error = error;
    })
  }

}
