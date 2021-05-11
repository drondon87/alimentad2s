import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Met } from 'src/app/models/Met.model';
import { RequerimientoAdultoReq } from 'src/app/models/RequerimientoAdultoReq.model';
import { FormulasService } from 'src/app/services/formulas.service';
import { AppState } from 'src/app/store/app.reducers';
import Swal from 'sweetalert2';
import { RequerimientoAdultoRes } from '../../models/RequerimientoAdultoRes.model';
import { requerimientoAdulto } from '../../store/actions/formulas.actions';

@Component({
  selector: 'app-requerimiento-adulto',
  templateUrl: './requerimiento-adulto.component.html',
  styles: []
})
export class RequerimientoAdultoComponent implements OnInit, OnDestroy {

  reqAdultoForm: FormGroup;
  mets: Met[];
  requerimientoAdultoSubs: Subscription;
  requerimientoAdultoRes: RequerimientoAdultoRes;
  loading: boolean;
  error: any;
  respuesta: boolean;

  constructor(private fb: FormBuilder,
              private _formulaService: FormulasService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.initCampos();

    this._formulaService.getMets()
      .subscribe((resp: any) => this.mets = resp);
  }

  ngOnDestroy(): void {
    if(this.requerimientoAdultoSubs){
      this.requerimientoAdultoSubs.unsubscribe();
    }
    
  }

  get sexo(){ return this.reqAdultoForm.get('sexo'); }

  get edad(){ return this.reqAdultoForm.get('edad'); }

  get pesoRecomendado(){ return this.reqAdultoForm.get('pesoRecomendado'); }

  get factoresActividad(){ return this.reqAdultoForm.get('factoresActividad'); }

  get kcal(){ return this.reqAdultoForm.get('kcal'); }

  get nivelActividadFisica(){ return this.reqAdultoForm.get('nivelActividadFisica'); }

  get masaGrasaKg(){ return this.reqAdultoForm.get('masaGrasaKg'); }

  get pesoActual(){ return this.reqAdultoForm.get('pesoActual'); }

  get tiempoActividadFisica(){ return this.reqAdultoForm.get('tiempoActividadFisica'); }

  get met(){ return this.reqAdultoForm.get('met'); }

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
    this.respuesta = false;
    this.loading = false;
    this.requerimientoAdultoRes = null;
  }

  calcularRequerimientoAdulto(){
    if(this.reqAdultoForm.invalid){ return;}

    Swal.fire({
      title: 'Calculando!',
      text: 'Espere por favor',
      icon: 'info',
      allowOutsideClick: true
    })
    Swal.showLoading();

    const { sexo, edad, pesoRecomendado, factoresActividad, kcal, nivelActividadFisica, masaGrasaKg, 
      pesoActual, tiempoActividadFisica, met } = this.reqAdultoForm.value;

    const requerimientoAdultoReq = new RequerimientoAdultoReq(sexo, edad, pesoRecomendado, factoresActividad, kcal, 
      nivelActividadFisica, masaGrasaKg, pesoActual, tiempoActividadFisica, met); 

    this.store.dispatch(requerimientoAdulto({requerimientoAdultoReq}));

    this.requerimientoAdultoSubs = this.store.select('requerimientoAdulto').subscribe( ({requerimientoAdulto, loading, error}) => {
      Swal.close();
      this.requerimientoAdultoRes = requerimientoAdulto;
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