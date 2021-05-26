import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialesComponent } from './historiales.component';
import { HistorialesRoutingModule } from './historiales-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HantropediaComponent } from './hantropedia/hantropedia.component';
import { HrequerimientoComponent } from './hrequerimiento/hrequerimiento.component';
import { AgGridModule } from 'ag-grid-angular';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [HistorialesComponent, HantropediaComponent, HrequerimientoComponent],
  imports: [
    CommonModule,
    HistorialesRoutingModule,
    TranslateModule,
    AgGridModule.withComponents([]),
    PipesModule
  ]
})
export class HistorialesModule { }
