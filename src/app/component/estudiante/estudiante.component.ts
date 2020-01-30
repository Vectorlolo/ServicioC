import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteServiceService } from '../../services/estudiante-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CarreraService } from '../../services/carrera.service';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor(
    private router:Router,
    private estudianteserviceservice:EstudianteServiceService,
    public matdialog: MatDialog,
    private carreracervice: CarreraService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
this.getcarreras()

  }

  carreras:any

getcarreras(){
  this.carreracervice.getCarreras().subscribe((carreras)=>{
    this.carreras = carreras
  })
}

turnos= [{value:"D"},{value:"N"}]
aprobados=[{value:"Si"},{value:"No"}]



  EstudianteForm = new FormGroup({
    ci_estudiante : new FormControl('', [Validators.required,Validators.maxLength(8),Validators.pattern('^[0-9]{1,8}$')]),
    n_estudiante: new FormControl('',[Validators.required]),
    a_estudiante: new FormControl('',[Validators.required]),
    semestre: new FormControl('',[Validators.required,Validators.min(6),Validators.max(10)]),
    turno: new FormControl('',[Validators.required]),
    carrera: new FormControl('',[Validators.required]),
    tutor: new FormControl('',[Validators.required]),
    tutor_c: new FormControl('',[Validators.required]),
    n_expediente: new FormControl('',[Validators.required]),
    nom_proyecto: new FormControl('',[Validators.required]),
    direccion: new FormControl('',[Validators.required]),
    aprobado: new FormControl('',[Validators.required])
  })


  get ci_estudiante() {return this.EstudianteForm.get('ci_estudiante')}
  get n_estudiante() {return this.EstudianteForm.get('n_estudiante')}
  get a_estudiante() {return this.EstudianteForm.get('a_estudiante')}
  get semestre() {return this.EstudianteForm.get('semestre')}
  get turno() {return this.EstudianteForm.get('turno')}
  get carrera() {return this.EstudianteForm.get('carrera')}
  get tutor() {return this.EstudianteForm.get('tutor')}
  get tutor_c() {return this.EstudianteForm.get('tutor_c')}
  get n_expediente() {return this.EstudianteForm.get('n_expediente')}
  get nom_proyecto() {return this.EstudianteForm.get('nom_proyecto')}
  get direccion() {return this.EstudianteForm.get('direccion')}
  get aprobado() {return this.EstudianteForm.get('aprobado')}
  

//Formulario para editar
  EstudianteEForm = new FormGroup({
    ci_estudiante : new FormControl('', [Validators.required,Validators.maxLength(8),Validators.pattern('^[0-9]{1,8}$')]),
    n_estudiante: new FormControl('',[Validators.required]),
    a_estudiante: new FormControl('',[Validators.required]),
    semestre: new FormControl('',[Validators.required,Validators.min(6),Validators.max(10)]),
    turno: new FormControl('',[Validators.required]),
    carrera: new FormControl('',[Validators.required]),
    tutor: new FormControl('',[Validators.required]),
    tutor_c: new FormControl('',[Validators.required]),
    n_expediente: new FormControl('',[Validators.required]),
    nom_proyecto: new FormControl('',[Validators.required]),
    direccion: new FormControl('',[Validators.required]),
    aprobado: new FormControl('',[Validators.required])
  })

  get ci_estudianteE() {return this.EstudianteForm.get('ci_estudiante')}
  get n_estudianteE() {return this.EstudianteForm.get('n_estudiante')}
  get a_estudianteE() {return this.EstudianteForm.get('a_estudiante')}
  get semestreE() {return this.EstudianteForm.get('semestre')}
  get turnoE() {return this.EstudianteForm.get('turno')}
  get carreraE() {return this.EstudianteForm.get('carrera')}
  get tutorE() {return this.EstudianteForm.get('tutor')}
  get tutor_cE() {return this.EstudianteForm.get('tutor_c')}
  get n_expedienteE() {return this.EstudianteForm.get('n_expediente')}
  get nom_proyectoE() {return this.EstudianteForm.get('nom_proyecto')}
  get direccionE() {return this.EstudianteForm.get('direccion')}
  get aprobadoE() {return this.EstudianteForm.get('aprobado')}
  











  createEstudiante(){
    this.estudianteserviceservice.createEstudiante(this.EstudianteForm.value).subscribe((estudiante)=>{
      this.router.navigateByUrl('/estudiante',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['/estudiante'])
      });
    })
  }



  tomarEstudiante(code){
    this.estudianteserviceservice.getEstudiante(code).subscribe((estudiante:any)=>{
      delete(estudiante._id)
      delete(estudiante.__v)
      this.EstudianteEForm.setValue(estudiante)
    })
  }

  updateEstudiante(){
    this.estudianteserviceservice.updateEstudiante(this.EstudianteForm.value).subscribe((estudiante:any)=>{
      this.router.navigateByUrl('/estudiante',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['/estudiante'])
      });
    })
  }


}
