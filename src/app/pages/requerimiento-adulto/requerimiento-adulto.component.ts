import { Input } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Met } from 'src/app/models/Met.model';
import { Persona } from 'src/app/models/PersonaRes.model';
import { RequerimientoAdultoReq } from 'src/app/models/RequerimientoAdultoReq.model';
import { SaveHistorialRequerimientoAdulto } from 'src/app/models/save-historial-req.model';
import { FormulasService } from 'src/app/services/formulas.service';
import { HistorialService } from 'src/app/services/historial.service';
import { PersonaService } from 'src/app/services/persona.service';
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

  @Input('persona') idPersona: string;

  reqAdultoForm: FormGroup;
  mets: Met[];
  requerimientoAdultoSubs: Subscription;
  requerimientoAdultoRes: RequerimientoAdultoRes;
  loading: boolean;
  error: any;
  respuesta: boolean;
  persona: Persona;
  historialReqGuardar: SaveHistorialRequerimientoAdulto;

  constructor(private fb: FormBuilder,
              private _formulaService: FormulasService,
              private store: Store<AppState>,
              private _personaService: PersonaService,
              private _historialService: HistorialService,
              private _router: Router) { }

  ngOnInit() {
    this.initCampos();

    this._formulaService.getMets()
      .subscribe((resp: any) => this.mets = resp);

    if(this.tienePersona){
      this.buscarPersona();
    }
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

  get tienePersona () { return (this.idPersona) ? true : false }

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

  buscarPersona(){
    Swal.fire({
      title: 'Buscando!',
      text: 'Espere por favor',
      icon: 'info',
      allowOutsideClick: true
    })
    Swal.showLoading();

    this._personaService.getPersonaSeleccionada(this.idPersona)
    .subscribe(
      (response: any) => {
        Swal.close();
        if(response.error){
          Swal.fire({
            title: `Error ${response.status} !!!`,
            text:  response.error.mensaje,
            icon: 'error'
          })
        }else{
          this.persona = response;
          this.reqAdultoForm.get('edad').setValue(this.persona.edad);
          this.reqAdultoForm.get('sexo').setValue(this.persona.sexo);
        }

      }
    );
  }

  imprimirPDF(){}

  guardarHistorial(){

    const { sexo, edad, pesoRecomendado, factoresActividad, kcal, nivelActividadFisica, masaGrasaKg, pesoActual, tiempoActividadFisica, met } = this.reqAdultoForm.value;

    const {mtRCB, mtADE, mtRCT, metodoDirecto, tasaMetabolicaBasal, requerimientoCaloricoTotal, tasaMetabolicaReposo, gastoEnergeticoActividadFisica,
      accionDinamicaEspecifica, gastoCaloricaTotal } = this.requerimientoAdultoRes;

    this.historialReqGuardar = new SaveHistorialRequerimientoAdulto();
    this.historialReqGuardar.idPersona = this.idPersona;
    this.historialReqGuardar.sexo= sexo;
    this.historialReqGuardar.edad= edad;
    this.historialReqGuardar.peso= pesoRecomendado;
    this.historialReqGuardar.factoresActividad = factoresActividad;
    this.historialReqGuardar.kcal= kcal;
    this.historialReqGuardar.nivelActividadFisica= nivelActividadFisica;
    this.historialReqGuardar.masaGrasaKg= masaGrasaKg;
    this.historialReqGuardar.pesoActual= pesoActual;
    this.historialReqGuardar.tiempoActividadFisica= tiempoActividadFisica;
    this.historialReqGuardar.met= met;
    this.historialReqGuardar.mtRCB= mtRCB;
    this.historialReqGuardar.mtADE= mtADE;
    this.historialReqGuardar.mtRCT= mtRCT;
    this.historialReqGuardar.metodoDirecto= metodoDirecto;
    this.historialReqGuardar.tasaMetabolicaBasal= tasaMetabolicaBasal;
    this.historialReqGuardar.requerimientoCaloricoTotal= requerimientoCaloricoTotal;
    this.historialReqGuardar.tasaMetabolicaReposo= tasaMetabolicaReposo;
    this.historialReqGuardar.gastoEnergeticoActividadFisica= gastoEnergeticoActividadFisica;
    this.historialReqGuardar.accionDinamicaEspecifica= accionDinamicaEspecifica;
    this.historialReqGuardar.gastoCaloricaTotal= gastoCaloricaTotal;

    this._historialService.guardarHistorialRequerimiento(this.historialReqGuardar)
      .subscribe(resp => {
        Swal.fire('Guardado', `Historial Guardado Correctamente`,'success');
        this._router.navigate([`pages/historiales/${resp.idPersona}`]);
      });

  }

}