import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { EstudianteServiceService } from '../../services/estudiante-service.service';
//import { async } from '@angular/core/testing';
import {DialogData} from '../findestudiante/findestudiante.component'

@Component({
  selector: 'app-infoestudiante',
  templateUrl: './infoestudiante.component.html',
  styleUrls: ['./infoestudiante.component.css']
})
export class InfoestudianteComponent implements OnInit {

estudiante:any



  constructor(
    public infoEstudiante:MatDialogRef<InfoestudianteComponent>,
    public estudianteServiceService:EstudianteServiceService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

ngOnInit() {

   this.estudianteServiceService.getProfesor(this.data.info).subscribe((estudiante:any)=>{
    this.estudiante = estudiante;
    })
  }


  Aceptar(){
    this.infoEstudiante.close(true);
  }

  

}
