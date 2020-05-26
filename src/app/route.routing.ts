import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './component/sidenav/sidenav.component'
import { EstudianteComponent } from './component/estudiante/estudiante.component'
import { LoginComponent } from './component/login/login.component'
import { CarreraComponent } from './component/carrera/carrera.component';
import { FindestudianteComponent } from './component/findestudiante/findestudiante.component';
import { AppComponent } from './app.component'
import {AuthGuard} from '../guards/auth.guard'
import { MateriaComponent } from './component/materia/materia.component'
import { ConstanciaComponent } from './component/constancia/constancia.component';
import { PeriodoComponent } from './component/periodo/periodo.component';
import { EditarPeriodoComponent } from './component/editar-periodo/editar-periodo.component';
import { EditarconstanciaComponent } from './component/editarconstancia/editarconstancia.component'
import { BitacoraComponent } from './component/bitacora/bitacora.component';

const routes: Routes = [
  { path:'',component: LoginComponent,pathMatch: 'full' },
  { path:'estudiante',component: EstudianteComponent,canActivate:[AuthGuard]},
  { path:'carrera',component: CarreraComponent,canActivate:[AuthGuard] },
  { path:'festudiante',component:FindestudianteComponent,canActivate:[AuthGuard]},
  { path: 'inicio', component: SidenavComponent,  canActivate:[AuthGuard]},
  { path:'materia',component:MateriaComponent ,canActivate:[AuthGuard]},
  { path:'constancia',component:ConstanciaComponent,canActivate:[AuthGuard]},
  {path:'periodo',component:PeriodoComponent,canActivate:[AuthGuard]},
  {path:'editarconstancia',component:EditarconstanciaComponent,canActivate:[AuthGuard]},
  {path:'bitacora',component:BitacoraComponent,canActivate:[AuthGuard]}
];

export const RouteRoutes = RouterModule.forRoot(routes);
