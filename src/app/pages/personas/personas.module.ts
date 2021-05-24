import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PersonasComponent } from './personas.component';
import { PersonasRoutingModule } from './personas-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { PersonaModule } from '../persona/persona.module';

@NgModule({
  declarations: [PersonasComponent],
  imports: [
    CommonModule,
    PersonaModule,
    ReactiveFormsModule,
    PersonasRoutingModule,
    TranslateModule,
    AgGridModule.withComponents([])
  ]
})
export class PersonasModule { }
