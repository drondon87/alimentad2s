import { NgModule } from '@angular/core';
import { RequerimientoAdultoComponent } from './requerimiento-adulto.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component: RequerimientoAdultoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequerimientoAdultoRoutingModule { }
