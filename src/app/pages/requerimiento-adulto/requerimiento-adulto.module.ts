import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequerimientoAdultoComponent } from './requerimiento-adulto.component';
import { RequerimientoAdultoRoutingModule } from './requerimiento-adulto-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RequerimientoAdultoComponent],
  imports: [
    CommonModule,
    RequerimientoAdultoRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [RequerimientoAdultoComponent]
})
export class RequerimientoAdultoModule { }
