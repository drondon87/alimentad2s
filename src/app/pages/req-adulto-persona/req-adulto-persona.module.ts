import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqAdultoPersonaRoutingModule } from './req-adulto-persona-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReqAdultoPersonaComponent } from './req-adulto-persona.component';
import { RequerimientoAdultoModule } from '../requerimiento-adulto/requerimiento-adulto.module';

@NgModule({
  declarations: [ReqAdultoPersonaComponent],
  imports: [
    CommonModule,
    ReqAdultoPersonaRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    RequerimientoAdultoModule
  ]
})
export class ReqAdultoPersonaModule { }
