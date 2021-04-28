import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesoAjustadoComponent } from './peso-ajustado.component';
import { PesoAjustadoRoutingModule } from './peso-ajustado-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PesoAjustadoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PesoAjustadoRoutingModule
  ]
})
export class PesoAjustadoModule { }
