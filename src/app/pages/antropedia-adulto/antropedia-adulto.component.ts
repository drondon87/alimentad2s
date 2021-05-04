import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import { AntropediaAdultoReq } from '../../models/AntropediaAdultoReq.model';
import { AntropediaAdultoRes } from '../../models/AntropediaAdultoRes.model';
import Swal from 'sweetalert2';
import { antropediaAdulto } from 'src/app/store/actions';

@Component({
  selector: 'app-antropedia-adulto',
  templateUrl: './antropedia-adulto.component.html',
  styles: []
})
export class AntropediaAdultoComponent implements OnInit, OnDestroy {

  antropediaForm: FormGroup;
  antropediaAdultoSubs: Subscription;
  antropediaAdultoRes: AntropediaAdultoRes;
  loading: boolean;
  error: any;
  respuesta: boolean;

  constructor(private fb: FormBuilder,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.initCampos();
  }

  ngOnDestroy(): void {
    if(this.antropediaAdultoSubs){
      this.antropediaAdultoSubs.unsubscribe();
    }
    
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
    this.respuesta = false;
    this.loading = false;
    this.antropediaAdultoRes = null;
  }

  calcularAntropediaAdulto(){
    if(this.antropediaForm.invalid){ return;}

    Swal.fire({
      title: 'Calculando!',
      text: 'Espere por favor',
      icon: 'info',
      allowOutsideClick: true
    })
    Swal.showLoading();

    const { sexo, edad, estatura, peso, cmuneca, cbi, ccintura, 
            ccadera, ptriceps, psubescapular, pbiceps, psuprailiaco, porcentajeGCD } = this.antropediaForm.value;

    const antropediaAdultoReq = new AntropediaAdultoReq(sexo, edad, estatura, peso, cbi, 
      ccintura, ccadera, cmuneca, ptriceps, psubescapular, pbiceps, psuprailiaco, porcentajeGCD);   

    this.store.dispatch(antropediaAdulto({antropediaAdultoReq}));

    this.antropediaAdultoSubs = this.store.select('antropediaAdulto').subscribe( ({antropediaAdulto, loading, error}) => {
      Swal.close();
      this.antropediaAdultoRes = antropediaAdulto;
      this.loading = loading;
      this.error = error;
      if(error != null){
        Swal.fire({
          title: `Error ${error.status} !!!`,
          text:  error.message,
          icon: 'error'
        })
        this.respuesta = false;
      }else{
        this.respuesta = true;
      }
    });
  }

  volver(){
    this.initCampos();
  }

}
