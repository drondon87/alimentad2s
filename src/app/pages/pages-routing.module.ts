import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    "path":"pages/antropediaAdulto",
     loadChildren:()=>import('./antropedia-adulto/antropedia-adulto.module').then(mod=>mod.AntropediaAdultoModule)
  },
  {
    "path":"pages/formulaDietetica",
     loadChildren:()=>import('./formula-dietetica/formula-dietetica.module').then(mod=>mod.FormulaDieteticaModule)
  },
  {
    "path":"pages/home",
     loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)
  },
  {
    "path":"pages/pesoAjustado",
     loadChildren:()=>import('./peso-ajustado/peso-ajustado.module').then(mod=>mod.PesoAjustadoModule)
  },
  {
    "path":"pages/requerimientoAdulto",
     loadChildren:()=>import('./requerimiento-adulto/requerimiento-adulto.module').then(mod=>mod.RequerimientoAdultoModule)
  },
  {
    "path":"pages/personas",
     loadChildren:()=>import('./personas/personas.module').then(mod=>mod.PersonasModule)
  },
  {
    "path":"pages/historiales/:persona",
     loadChildren:()=>import('./historiales/historiales.module').then(mod=>mod.HistorialesModule)
  },
  {"path":"",redirectTo:"pages/home",pathMatch:'full'},
  {"path":"**",redirectTo:"pages/home",pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
