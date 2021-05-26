import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/PersonaRes.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-historiales',
  templateUrl: './historiales.component.html',
  styleUrls: []
})
export class HistorialesComponent {

  idPersona: string;
  persona: Persona;

  constructor(private _activatedRoute: ActivatedRoute,
              private _personaServices: PersonaService) {
    this._activatedRoute.params.subscribe(params => this.idPersona = params['persona']);
   
    this._personaServices.getPersonaSeleccionada(this.idPersona)
      .subscribe((persona: any) => this.persona = persona );
   }
}
