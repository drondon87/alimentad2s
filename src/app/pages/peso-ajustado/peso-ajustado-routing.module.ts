import { NgModule } from '@angular/core';
import { PesoAjustadoComponent } from './peso-ajustado.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component: PesoAjustadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesoAjustadoRoutingModule { }
