import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistorialAntropediaAdulto } from 'src/app/models/Historial-Antropedia.model';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-hantropedia',
  templateUrl: './hantropedia.component.html',
  styleUrls: []
})
export class HantropediaComponent implements OnInit {

  idPersona: string;
  historialesAntropedia: HistorialAntropediaAdulto[];
  nuevoHistorial: HistorialAntropediaAdulto[] = [];
  mostrarInfoAntropedia: boolean = false;
  historialAntropedia: HistorialAntropediaAdulto;

  columnDefs = [
    {headerName: 'Fecha  Creación', field: 'fechaCreacion', sortable:true },
    {headerName: 'Peso', field: 'medidasAntropedia.peso', sortable:true }
  ];
  gridApi;
  gridColumnApi;
  rowData: any;
  rowSelection = 'single';

  constructor(private _activatedRoute: ActivatedRoute,
              private _historialServices: HistorialService) { }

  ngOnInit() {
    this._activatedRoute.parent.params
      .subscribe(({persona}) => this.idPersona = persona);

    this._historialServices.getHistorialesAntropediaAdultoByPersona(this.idPersona)
      .subscribe(response => this.handleSuccessfullResponse(response));
  }

  handleSuccessfullResponse(response) {

    if(response.codigo){
      this.historialesAntropedia = [];
      this.rowData = [];
    }else{
      this.historialesAntropedia = response;
      this.rowData = response;
    }
    
  }

  onSelectionChanged() {  
    let selectedRows = this.gridApi.getSelectedRows();
    this.historialAntropedia = selectedRows[0];
    this.mostrarInfoAntropedia = true;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}
