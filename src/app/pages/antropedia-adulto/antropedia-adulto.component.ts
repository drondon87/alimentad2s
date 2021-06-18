import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import { AntropediaAdultoReq } from '../../models/AntropediaAdultoReq.model';
import { AntropediaAdultoRes } from '../../models/AntropediaAdultoRes.model';
import Swal from 'sweetalert2';
import { antropediaAdulto } from 'src/app/store/actions';
import { Persona } from 'src/app/models/PersonaRes.model';
import { PersonaService } from 'src/app/services/persona.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { SaveHistorialAntropediaAdulto } from 'src/app/models/save-historial-antro.model';
import { HistorialService } from 'src/app/services/historial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-antropedia-adulto',
  templateUrl: './antropedia-adulto.component.html',
  styles: []
})
export class AntropediaAdultoComponent implements OnInit, OnDestroy {

  @Input('persona') idPersona: string;

  antropediaForm: FormGroup;
  antropediaAdultoSubs: Subscription;
  antropediaAdultoRes: AntropediaAdultoRes;
  loading: boolean;
  error: any;
  respuesta: boolean;
  persona: Persona;
  historialAntroGuardar: SaveHistorialAntropediaAdulto;

  constructor(private fb: FormBuilder,
              private store: Store<AppState>,
              private _personaService: PersonaService,
              private _historialService: HistorialService,
              private _router: Router) { }

  get sexo(){ return this.antropediaForm.get('sexo'); }

  get edad(){ return this.antropediaForm.get('edad'); }

  get estatura(){ return this.antropediaForm.get('estatura'); }

  get peso(){ return this.antropediaForm.get('peso'); }

  get tienePersona () { return (this.idPersona) ? true : false }

  ngOnInit() {
    this.initCampos();

    if(this.tienePersona){
      this.buscarPersona();
    }
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

    if(this.tienePersona){
      this.buscarPersona();
    }
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
          this.antropediaForm.get('edad').setValue(this.persona.edad);
          this.antropediaForm.get('sexo').setValue(this.persona.sexo)
          this.antropediaForm.get('estatura').setValue(this.persona.estatura)
          this.antropediaForm.get('peso').setValue(this.persona.peso)
        }

      }
    );
  }

  imprimirPDF(){
    let source: any = document.getElementById('antroFormResult');

    html2canvas(source).then((canvas) =>{

      let doc = new jsPDF('p', 'mm', 'a4');
      let height =  canvas.height * 208 / canvas.width;
      let page0 = canvas.toDataURL('image/png');
      doc.addImage(page0, 'PNG', 1, 0, 208, height);
      doc.save('AntropediaAdulto');
    });
  }

  guardarHistorial(){

    const { sexo, edad, estatura, peso, cmuneca, cbi, ccintura, ccadera, ptriceps, psubescapular, pbiceps, psuprailiaco, porcentajeGCD } = this.antropediaForm.value

    const { estimacionContextura, estimacionIMC, areaMagra, areaGrasa, indiceCinturaCadera,indiceCinturaTalla, indiceSestri, masaLibreGrasa, siri, circunsferenciaCintura,
      valorAbsoluto, hamwi, west, broca, derivadaIMC, pesoDeseableMLG, diagnosticoAntropometrico} = this.antropediaAdultoRes;

    this.historialAntroGuardar = new SaveHistorialAntropediaAdulto();
    this.historialAntroGuardar.idPersona = this.idPersona;
    this.historialAntroGuardar.sexo = sexo;
    this.historialAntroGuardar.edad = edad;
    this.historialAntroGuardar.estatura=estatura;
    this.historialAntroGuardar.peso=peso;
    this.historialAntroGuardar.cbi=cbi;
    this.historialAntroGuardar.ccintura=ccintura;
    this.historialAntroGuardar.ccadera=ccadera;
    this.historialAntroGuardar.cmuneca=cmuneca;
    this.historialAntroGuardar.ptriceps=ptriceps;
    this.historialAntroGuardar.psubescapular=psubescapular;
    this.historialAntroGuardar.pbiceps=pbiceps;
    this.historialAntroGuardar.psuprailiaco=psuprailiaco;
    this.historialAntroGuardar.porcentajeGCD=porcentajeGCD;
    this.historialAntroGuardar.estimacionContextura=estimacionContextura;
    this.historialAntroGuardar.estimacionIMC=estimacionIMC;
    this.historialAntroGuardar.areaMagra=areaMagra;
    this.historialAntroGuardar.areaGrasa=areaGrasa;
    this.historialAntroGuardar.indiceCinturaCadera=indiceCinturaCadera;
    this.historialAntroGuardar.indiceCinturaTalla=indiceCinturaTalla;
    this.historialAntroGuardar.indiceSestri=indiceSestri;
    this.historialAntroGuardar.masaLibreGrasa=masaLibreGrasa;
    this.historialAntroGuardar.siri=siri;
    this.historialAntroGuardar.circunsferenciaCintura=circunsferenciaCintura;
    this.historialAntroGuardar.valorAbsoluto=valorAbsoluto;
    this.historialAntroGuardar.hamwi=hamwi;
    this.historialAntroGuardar.west=west;
    this.historialAntroGuardar.broca=broca;
    this.historialAntroGuardar.derivadaIMC=derivadaIMC;
    this.historialAntroGuardar.pesoDeseableMLG=pesoDeseableMLG;
    this.historialAntroGuardar.diagnosticoAntropometrico=diagnosticoAntropometrico;

    this._historialService.guardarHistorialAntropedia(this.historialAntroGuardar)
      .subscribe(resp => {
        Swal.fire('Guardado', `Historial Guardado Correctamente`,'success');
        this._router.navigate([`pages/historiales/${resp.idPersona}`]);
      });

  }

}
