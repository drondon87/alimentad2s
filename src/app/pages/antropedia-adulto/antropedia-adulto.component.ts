import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-antropedia-adulto',
  templateUrl: './antropedia-adulto.component.html',
  styles: []
})
export class AntropediaAdultoComponent implements OnInit {

  antropediaForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initCampos();
  }

  initCampos(){
    this.antropediaForm = this.fb.group({
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      estatura: ['', Validators.required],
      peso: ['', Validators.required],
      cmuneca: '',
      cbi: '',
      ccintura: '',
      ccadera: '',
      ptriceps: '',
      psubescapular: '',
      pbiceps: '',
      psuprailiaco: '',
      porcentajeGCD: ''
    });
  }

}
