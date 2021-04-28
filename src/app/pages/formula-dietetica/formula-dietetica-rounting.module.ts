import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaDieteticaComponent } from './formula-dietetica.component';

const routes: Routes = [
  {path:'',component: FormulaDieteticaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaDieteticaRountingModule { }
