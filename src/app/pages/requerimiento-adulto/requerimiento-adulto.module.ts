import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequerimientoAdultoComponent } from './requerimiento-adulto.component';
import { RequerimientoAdultoRoutingModule } from './requerimiento-adulto-routing.module';

@NgModule({
  declarations: [RequerimientoAdultoComponent],
  imports: [
    CommonModule,
    RequerimientoAdultoRoutingModule
  ]
})
export class RequerimientoAdultoModule { }
