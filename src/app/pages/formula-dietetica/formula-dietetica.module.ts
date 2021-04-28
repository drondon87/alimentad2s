import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaDieteticaComponent } from './formula-dietetica.component';
import { FormulaDieteticaRountingModule } from './formula-dietetica-rounting.module';

@NgModule({
  declarations: [FormulaDieteticaComponent],
  imports: [
    CommonModule,
    FormulaDieteticaRountingModule
  ]
})
export class FormulaDieteticaModule { }
