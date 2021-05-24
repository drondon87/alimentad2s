import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../models/PersonaRes.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: []
})
export class PersonaComponent implements OnInit {


  @Input('modo') modo;
  @Input('persona') persona: Persona;

  personaEditarForm: FormGroup;
  personaEditar: Persona;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.inicializarCamposFormulario();
  }

  inicializarCamposFormulario(){
    this.personaEditarForm = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      estatura: ['', Validators.required],
      peso: ['', Validators.required]
    });
  }

  editarP(){
    console.log('Persona', this.persona);
  }

  historialPersona(){

  }

  eliminarPersona(){

  }

  generarAntropedia(){

  }

  generarRequerimiento(){}

}
