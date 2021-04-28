import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntropediaAdultoComponent } from './antropedia-adulto.component';
import { AntropediaAdultoRoutingModule } from './antropedia-adulto-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AntropediaAdultoComponent],
  imports: [
    CommonModule,
    AntropediaAdultoRoutingModule,
    TranslateModule
  ]
})
export class AntropediaAdultoModule { }