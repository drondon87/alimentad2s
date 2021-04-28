import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-requerimiento-adulto',
  templateUrl: './requerimiento-adulto.component.html',
  styles: []
})
export class RequerimientoAdultoComponent implements OnInit {

  reqAdultoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initCampos();
  }

  initCampos(){
    this.reqAdultoForm = this.fb.group({
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      pesoRecomendado: ['', Validators.required],
      factoresActividad: ['', Validators.required],
      kcal: ['', Validators.required],
      nivelActividadFisica: ['', Validators.required],
      masaGrasaKg: ['', Validators.required],
      pesoActual: ['', Validators.required],
      tiempoActividadFisica: ['', Validators.required],
      met: ['', Validators.required]
    });
  }

}
