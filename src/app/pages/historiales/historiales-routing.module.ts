import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HantropediaComponent } from './hantropedia/hantropedia.component';
import { HistorialesComponent } from './historiales.component';
import { HrequerimientoComponent } from './hrequerimiento/hrequerimiento.component';

const routes: Routes = [
  {
    path:'',component: HistorialesComponent,
    children: [
      { path: 'hantropedia', component: HantropediaComponent},
      { path: 'hrequerimiento', component: HrequerimientoComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'hantropedia'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialesRoutingModule { }
