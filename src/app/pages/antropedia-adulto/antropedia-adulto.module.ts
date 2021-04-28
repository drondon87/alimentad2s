import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntropediaAdultoComponent } from './antropedia-adulto.component';
import { AntropediaAdultoRoutingModule } from './antropedia-adulto-routing.module';


@NgModule({
  declarations: [AntropediaAdultoComponent],
  imports: [
    CommonModule,
    AntropediaAdultoRoutingModule
  ]
})
export class AntropediaAdultoModule { }