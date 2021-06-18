import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistorialRequerimientoAdulto } from 'src/app/models/Historial-Requerimiento.model';
import { Met } from 'src/app/models/Met.model';
import { HistorialService } from 'src/app/services/historial.service';
import { FormulasService } from '../../../services/formulas.service';

@Component({
  selector: 'app-hrequerimiento',
  templateUrl: './hrequerimiento.component.html',
  styleUrls: []
})
export class HrequerimientoComponent implements OnInit {

  idPersona: string;
  public hreqAdulto: HistorialRequerimientoAdulto[] = [];
  public nuevoHistorial: HistorialRequerimientoAdulto[] = [];
  public mostrarInfoRequerimiento: boolean = false;
  public historialRequerimiento: HistorialRequerimientoAdulto;

  public columnDefs = [
    {headerName: 'Fecha  Creación', field: 'fechaCreacion', sortable:true },
    {headerName: 'Peso', field: 'medidaRequerimiento.peso', sortable:true }
  ];
  public gridApi;
  public gridColumnApi;
  public rowData: any;
  public rowSelection = 'single';
  public metricas: Met[];
  public metricaSelected: Met;

  constructor(private _activatedRoute: ActivatedRoute,
              private _historialServices: HistorialService,
              private _formulaServices: FormulasService) { }

  ngOnInit() {
    this._activatedRoute.parent.params
      .subscribe(({persona}) => this.idPersona = persona);

    this._historialServices.getHistorialesRequerimientoAdultoByPersona(this.idPersona)
      .subscribe(response => this.handleSuccessfullResponse(response));

    /*this._formulaServices.getMets().subscribe(
        response => this.handleSuccessfulResponseMets(response),
      );*/
  }

  get sexo(){ 
    return (this.historialRequerimiento.medidaRequerimiento.sexo === 'F') ? 'Femenino' : 'Masculino'; 
  }

  get factorActividad() {
    switch(this.historialRequerimiento.medidaRequerimiento.factoresActividad) { 
      case 'L': return 'Leve'
      case 'M': return 'Moderada'
      case 'F': return 'Fuerte'
      case 'MF': return 'Muy Fuerte'
      default: return 'No Actividad'
   } 
  }

  get nivelActividad() {
    switch(this.historialRequerimiento.medidaRequerimiento.nivelActividadFisica) { 
      case 'L': return 'Ligero'
      case 'M': return 'Moderado'
      case 'I': return 'Intenso'
      default: return 'No Nive Actividad'
   } 
  }

  private handleSuccessfullResponse(response) {
    if(response.codigo){
      this.hreqAdulto = [];
      this.rowData = [];
    }else{
      this.hreqAdulto = response;
      this.rowData = response;
    }
  }

  onSelectionChanged(event) {  
    let selectedRows = this.gridApi.getSelectedRows();
    this.historialRequerimiento = selectedRows[0];
    this. metricaSelected = this.getMetSelected(this.historialRequerimiento.medidaRequerimiento.met);
    this.mostrarInfoRequerimiento = true;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  private handleSuccessfulResponseMets(response) {
    this.metricas = response;
  }

  private getMetSelected(metrica: string): Met{
    return this.metricas.filter((met: Met) => met.codigo === metrica)[0];
  }

}
