import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PersonaComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports:[PersonaComponent]
})
export class PersonaModule { }
