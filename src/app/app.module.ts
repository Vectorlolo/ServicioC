import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouteRoutes } from './route.routing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



//Angular material
import {MatDialogModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTreeModule,
    MatProgressBarModule,
    MatStepperModule } from '@angular/material/'




//Componentes
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { CarreraComponent } from './component/carrera/carrera.component';
import { BorrardialogComponent } from './component/borrardialog/borrardialog.component';
import { EditarcarreraComponent } from './component/editarcarrera/editarcarrera.component';
import { FindestudianteComponent } from './component/findestudiante/findestudiante.component';
import { InfoestudianteComponent } from './component/infoestudiante/infoestudiante.component';
import { EditarestudianteComponent } from './component/editarestudiante/editarestudiante.component';






@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LoginComponent,
    EstudianteComponent,
    CarreraComponent,
    BorrardialogComponent,
    EditarcarreraComponent,
    FindestudianteComponent,
    InfoestudianteComponent,
    EditarestudianteComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutes,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTreeModule,
    MatProgressBarModule,
    MatStepperModule,
    FormsModule
 
    

  ],
  providers: [],
  entryComponents:[
    BorrardialogComponent,
    EditarcarreraComponent,
    InfoestudianteComponent,
    EditarestudianteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
