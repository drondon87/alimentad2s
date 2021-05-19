import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PersonaRes } from 'src/app/models/PersonaRes.model';
import { personas } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

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

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(personas());

    this.personasSubs = this.store.select('personas').subscribe( ({personas, loading, error}) => {
      //Swal.close();
      this.personasRes = personas;
      console.log(this.personasRes);
      this.loading = loading;
      this.error = error;
      if(error != null){
        /*Swal.fire({
          title: `Error ${error.status} !!!`,
          text:  error.message,
          icon: 'error'
        })*/
        this.respuesta = false;
      }else{
        this.respuesta = true;
      }
    });
  }

}
