import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { pesoAjustadoReducer } from '../store/reducers';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    StoreModule.forFeature('pesoAjustado', pesoAjustadoReducer)
  ]
})
export class PagesModule { }
