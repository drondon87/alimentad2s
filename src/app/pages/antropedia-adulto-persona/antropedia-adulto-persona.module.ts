import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntropediaAdultoPersonaComponent } from './antropedia-adulto-persona.component';
import { AntropediaAdultoPersonaRoutingModule } from './antropedia-adulto-persona-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AntropediaAdultoModule } from '../antropedia-adulto/antropedia-adulto.module';



@NgModule({
  declarations: [AntropediaAdultoPersonaComponent],
  imports: [
    CommonModule,
    AntropediaAdultoPersonaRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    AntropediaAdultoModule
  ]
})
export class AntropediaAdultoPersonaModule { }
