import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PersonasComponent } from './personas.component';
import { PersonasRoutingModule } from './personas-routing.module';

@NgModule({
  declarations: [PersonasComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonasRoutingModule,
    TranslateModule
  ]
})
export class PersonasModule { }
