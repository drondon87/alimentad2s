import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesoAjustadoComponent } from './peso-ajustado.component';
import { PesoAjustadoRoutingModule } from './peso-ajustado-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [PesoAjustadoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PesoAjustadoRoutingModule,
    TranslateModule,
    PipesModule
  ]
})
export class PesoAjustadoModule { }
