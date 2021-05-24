import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/PersonaRes.model';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: []
})
export class PersonasComponent implements OnInit {

  personaSubs: Subscription;
  personas: Persona[];
  persona: Persona;
  loading: boolean;
  error: any;
  respuesta: boolean;
  mensajePantalla: string = '';
  respuestaServicio: boolean = false;
  mensajeAlert: string;
  claseAlert: string = '';
  editar: boolean;
  mensajeEditar: string = '';
  gridApi;
  gridColumnApi;
  rowData: any;
  rowSelection = 'single';

  columnDefs = [
    {headerName: 'Cédula', field: 'identificacion', sortable:true },
    {headerName: 'Nombre', field: 'nombre', sortable:true },
    {headerName: 'Apellido', field: 'apellido', sortable:true},
    {headerName: 'Edad', field: 'edad', sortable:true},
    {headerName: 'Estatus', field: 'status', sortable:true}
];

  constructor(private _personaServices: PersonaService) { }

  ngOnInit() {
    this.initPersonas();
  }

  onSelectionChanged(event) {
    let selectedRows = this.gridApi.getSelectedRows();
    const id = selectedRows[0].id;
    this.editar = true;
   
    Swal.fire({
      title: 'Buscando!',
      text: 'Espere por favor',
      icon: 'info',
      allowOutsideClick: true
    })
    Swal.showLoading();

    this._personaServices.getPersonaSeleccionada(id)
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
        }

      }
    );
    
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  initPersonas(){
    this.editar = false;
    this.respuestaServicio = false;
    this._personaServices.getPersonasTodas().subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {

    if(response.codigo){
      this.personas = [];
      this.rowData = [];
      this.mensajeEditar = '';
    }else{
      this.personas = response;
      this.rowData = response;
      this.mensajeEditar = 'Seleccione una persona a editar';
    }
    
  }
  
  personaActualizada(actualizado: boolean){
    if(actualizado){
      this.initPersonas();
    }
    
  }

}
