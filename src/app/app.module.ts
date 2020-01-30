import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouteRoutes } from './route.routing'
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/';
import { LoginComponent } from './component/login/login.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { MatFormFieldModule } from '@angular/material/'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LoginComponent,
    EstudianteComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutes,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
