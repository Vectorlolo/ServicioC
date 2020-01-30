import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { SidenavComponent } from './component/sidenav/sidenav.component'
import { EstudianteComponent } from './component/estudiante/estudiante.component'
const routes: Routes = [
  { path:'estudiante',  //cambiar con el de estudiante
    component:SidenavComponent
  },
  {
    path:'puta',//cambiar luego
    component:EstudianteComponent
  }
  
];

export const RouteRoutes = RouterModule.forChild(routes);
