import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {
    path:'', component: DashboardComponent,
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/pages.module')
                          .then(m => m.PagesModule)
  },
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
