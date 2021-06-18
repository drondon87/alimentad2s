import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqAdultoPersonaRoutingModule } from './req-adulto-persona-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReqAdultoPersonaComponent } from './req-adulto-persona.component';

@NgModule({
  declarations: [ReqAdultoPersonaComponent],
  imports: [
    CommonModule,
    ReqAdultoPersonaRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class ReqAdultoPersonaModule { }
