import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-antropedia-adulto-persona',
  templateUrl: './antropedia-adulto-persona.component.html',
  styleUrls: []
})
export class AntropediaAdultoPersonaComponent implements OnInit {

  public idPersona: string;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.parent.params
      .subscribe(({persona}) => this.idPersona = persona);
  }

}
