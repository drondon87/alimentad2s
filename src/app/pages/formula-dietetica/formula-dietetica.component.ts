import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import Swal from 'sweetalert2';
import { FormulaDieteticaReq } from '../../models/FormulaDieteticaReq.model';
import { FormulaDieteticaRes } from '../../models/FormulaDieteticaRes.model';
import { formulaDietetica } from '../../store/actions/formulas.actions';

@Component({
  selector: 'app-formula-dietetica',
  templateUrl: './formula-dietetica.component.html',
  styles: []
})
export class FormulaDieteticaComponent implements OnInit, OnDestroy {

  formulaDForm: FormGroup;
  formulaDieteticaSubs: Subscription;
  formulaDieteticaRes: FormulaDieteticaRes;
  loading: boolean;
  error: any;
  respuesta: boolean;

  constructor(private fb: FormBuilder,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.initCampos();
  }

  ngOnDestroy(): void {
    if(this.formulaDieteticaSubs){
      this.formulaDieteticaSubs.unsubscribe();
    } 
  }

  initCampos(){
    this.formulaDForm = this.fb.group({
      gramo: ['', Validators.required],
      pesoRecomendado: ['', Validators.required],
      rct: ['', Validators.required],
      porcentajeGrasasTotales: ['', Validators.required],
      porcentajeGrasasSaturadas: ['', Validators.required],
      porcentajeGrasasPoliinsaturadas: ['', Validators.required],
      porcentajeGrasasMonoInsaturadas: ['', Validators.required],
      porcentajeCarbComplejos: ['', Validators.required],
      porcentajeCarbSimples: ['', Validators.required],
      fibraDietetica: ['', Validators.required],
      sodio: ['', Validators.required],
      colesterol: ['', Validators.required],
    });

    this.respuesta = false;
    this.loading = false;
    this.formulaDieteticaRes = null;
  }

  calcularFormulaDietetica(){
    if(this.formulaDForm.invalid){ return;}

    Swal.fire({
      title: 'Calculando!',
      text: 'Espere por favor',
      icon: 'info',
      allowOutsideClick: true
    })
    Swal.showLoading();

    const { gramo, pesoRecomendado, rct, porcentajeGrasasTotales, porcentajeGrasasSaturadas, porcentajeGrasasPoliinsaturadas, porcentajeGrasasMonoInsaturadas, 
      porcentajeCarbComplejos, porcentajeCarbSimples, fibraDietetica, sodio, colesterol } = this.formulaDForm.value;

    const formulaDieteticaReq = new FormulaDieteticaReq(gramo, pesoRecomendado, rct, porcentajeGrasasTotales, porcentajeGrasasSaturadas, 
      porcentajeGrasasPoliinsaturadas, porcentajeGrasasMonoInsaturadas, porcentajeCarbComplejos, porcentajeCarbSimples, fibraDietetica, 
      sodio, colesterol); 

    this.store.dispatch(formulaDietetica({formulaDieteticaReq}));
    
    this.formulaDieteticaSubs = this.store.select('formulaDietetica').subscribe( ({formulaDietetica, loading, error}) => {
      Swal.close();
      this.formulaDieteticaRes = formulaDietetica;
      console.log(this.formulaDieteticaRes);
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
