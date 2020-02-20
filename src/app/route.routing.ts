import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './component/sidenav/sidenav.component'
import { EstudianteComponent } from './component/estudiante/estudiante.component'
import { LoginComponent } from './component/login/login.component'
import { CarreraComponent } from './component/carrera/carrera.component';
import { FindestudianteComponent } from './component/findestudiante/findestudiante.component';




const routes: Routes = [
  { path:'',component: LoginComponent},
  { path:'estudiante',component: EstudianteComponent},
  { path:'carrera',component: CarreraComponent },
  { path:'festudiante',component:FindestudianteComponent}
];

export const RouteRoutes = RouterModule.forRoot(routes);
