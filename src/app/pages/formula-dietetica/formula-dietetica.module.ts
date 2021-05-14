import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaDieteticaComponent } from './formula-dietetica.component';
import { FormulaDieteticaRountingModule } from './formula-dietetica-rounting.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormulaDieteticaComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormulaDieteticaRountingModule,
    ReactiveFormsModule
  ]
})
export class FormulaDieteticaModule { }
