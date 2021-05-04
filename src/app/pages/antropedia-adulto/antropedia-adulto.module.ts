import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntropediaAdultoComponent } from './antropedia-adulto.component';
import { AntropediaAdultoRoutingModule } from './antropedia-adulto-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [AntropediaAdultoComponent],
  imports: [
    CommonModule,
    AntropediaAdultoRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class AntropediaAdultoModule { }