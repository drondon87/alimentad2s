import { NgModule } from '@angular/core';
import { AntropediaAdultoPersonaComponent } from './antropedia-adulto-persona.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'',component: AntropediaAdultoPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntropediaAdultoPersonaRoutingModule { }
