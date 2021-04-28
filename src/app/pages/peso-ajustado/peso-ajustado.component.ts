import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PesoAjustadoReq } from 'src/app/models/PesoAjustadoReq.model';
import { pesoAjustado } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { PesoAjustadoRes } from 'src/app/models/PesoAjustadoRes.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-peso-ajustado',
  templateUrl: './peso-ajustado.component.html',
  styles: []
})
export class PesoAjustadoComponent implements OnInit, OnDestroy {

  pesoAjustadoForm: FormGroup;
  pesoAjustadoSubs: Subscription;
  pesoAjustadoRes: PesoAjustadoRes;
  loading: boolean;
  error: any;
  respuesta: boolean;

  constructor(private fb: FormBuilder,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.initFormulario();
  }

  initFormulario(){
    this.pesoAjustadoForm = this.fb.group({
      pesoKg: ['',Validators.required],
      pesoRecomendado: ['', Validators.required]
    });
    this.respuesta = false;
    this.loading = false;
    this.pesoAjustadoRes = null;
  }

  ngOnDestroy(): void {
    if(this.pesoAjustadoSubs){
      this.pesoAjustadoSubs.unsubscribe();
    }
    
  }

  calcularPesoAjustado(){

    if(this.pesoAjustadoForm.invalid){ return;}
    
    Swal.fire({
      title: 'Calculando!',
      text: 'Espere por favor',
      icon: 'info',
      allowOutsideClick: true
    })
    Swal.showLoading();

    const { pesoKg, pesoRecomendado } = this.pesoAjustadoForm.value;

    const pesoAjustadoReq = new PesoAjustadoReq(pesoKg, pesoRecomendado);

    this.store.dispatch(pesoAjustado({pesoAjustadoReq}));

    this.pesoAjustadoSubs = this.store.select('pesoAjustado').subscribe( ({pesoAjustado, loading, error}) => {
      Swal.close();
      this.pesoAjustadoRes = pesoAjustado;
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
    this.initFormulario();
  }

}
