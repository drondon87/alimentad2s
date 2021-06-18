import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-req-adulto-persona',
  templateUrl: './req-adulto-persona.component.html',
  styles: []
})
export class ReqAdultoPersonaComponent implements OnInit {

  public idPersona: string;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.parent.params
      .subscribe(({persona}) => this.idPersona = persona);
  }

}
