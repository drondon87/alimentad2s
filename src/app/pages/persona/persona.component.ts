import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';
import { Persona } from '../../models/PersonaRes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: []
})
export class PersonaComponent implements OnInit {


  @Input('modo') modo;
  @Input('persona') persona: Persona;
  @Output() actualizado = new EventEmitter<boolean>();

  personaEditarForm: FormGroup;
  personaEditar: Persona;
  respuestaServicio: boolean = false;
  mensajeAlert: string = '';
  claseAlert: string = '';
  mensajeEditar: string = '';

  constructor(private _formBuilder: FormBuilder,
              private _personaServices: PersonaService,
              private _router: Router) { }

  ngOnInit() {
    this.inicializarCamposFormulario();
  }

  inicializarCamposFormulario(){
    this.personaEditarForm = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      estatura: ['', Validators.required],
      peso: ['', Validators.required]
    });
  }

  editarP(){
    Swal.fire({
      title: 'Editando!',
      text: 'Espere por favor',
      icon: 'info',
      allowOutsideClick: true
    })
    Swal.showLoading();

    this._personaServices.modificarPersona(this.persona)
    .subscribe(
      (response: any) => {
        Swal.close();

        if(response.codigo !== 200){
          Swal.fire({
            title: `Error ${response.status} !!!`,
            text:  response.error.mensaje,
            icon: 'error'
          })
        }else{
          Swal.fire({
            title: `Actualizado !!!`,
            text:  response.mensaje,
            icon: 'success'
          })
        }

      }
     );

     setTimeout(()=> this.actualizado.emit(true) , 1500);

  }

  validarMensaje(data){
    
    this.respuestaServicio = true;
    this.mensajeAlert = data.mensaje;
    this.claseAlert = 'alert alert-success';
  }

  historialPersona(){
    this._router.navigate([`pages/historiales/${this.persona.id}`]); 
  }

  eliminarPersona(){

    Swal.fire({
      title: '¿Seguro que quiere eliminar esta Persona?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí borralo!!!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._personaServices.desactivarPersona(this.persona.id)
        .subscribe(res => {
          const nombreEliminado = `${this.persona.nombre} ${this.persona.apellido}`
          Swal.fire('Eliminado',nombreEliminado,'success');
        });
        setTimeout(()=> this.actualizado.emit(true) , 1500);
      }
    });

  }

  generarAntropedia(){
    this._router.navigate([`pages/antropediaAdulto/${this.persona.id}`]); 
  }

  generarRequerimiento(){
    this._router.navigate([`pages/requerimientoAdulto/${this.persona.id}`]); 
  }

}
