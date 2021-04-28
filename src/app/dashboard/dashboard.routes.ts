import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AntropediaAdultoComponent } from '../pages/antropedia-adulto/antropedia-adulto.component';
import { FormulaDieteticaComponent } from '../pages/formula-dietetica/formula-dietetica.component';
import { PesoAjustadoComponent } from '../pages/peso-ajustado/peso-ajustado.component';
import { RequerimientoAdultoComponent } from '../pages/requerimiento-adulto/requerimiento-adulto.component';

export const dashboardRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pesoAjustado', component: PesoAjustadoComponent},
    {path: 'antropediaAdulto', component: AntropediaAdultoComponent},
    {path: 'requerimientoAdulto', component: RequerimientoAdultoComponent},
    {path: 'formulaDietetica', component: FormulaDieteticaComponent}
]
