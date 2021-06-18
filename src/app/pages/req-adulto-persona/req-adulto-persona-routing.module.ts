import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReqAdultoPersonaComponent } from './req-adulto-persona.component';

const routes: Routes = [
  {path:'',component: ReqAdultoPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReqAdultoPersonaRoutingModule { }
