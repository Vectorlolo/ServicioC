import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteServiceService } from '../../services/estudiante-service.service';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CarreraService } from '../../services/carrera.service';
import {NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {


 
  
 //carreras:any


  constructor(
    private router:Router,
    private estudianteserviceservice:EstudianteServiceService,
    //public matdialog: MatDialog,
    private carreracervice: CarreraService,
    private formbuilder: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {

 /* this.carreracervice.getCarreras() 
.subscribe( carrera =>  this.carreras = carrera)
 */
}




 


tipoo= [{name:"Tiempo completo",value:"TV"},{name:"Tiempo medio",value:"MC"},{name:"Tiempo  nose",value:"DE"},{name:"Tiempo esclavo",value:"XD"}]




  ProfesorForm = new FormGroup({
    ci_profesor : new FormControl('', [Validators.required,Validators.maxLength(8),Validators.pattern('^[0-9]{1,8}$')]),
    n_profesor: new FormControl('',[Validators.required]),
    a_profesor: new FormControl('',[Validators.required]),
    tipo: new FormControl('',[Validators.required]),
  })


  get ci_profesor() {return this.ProfesorForm.get('ci_profesor')}
  get n_profesor() {return this.ProfesorForm.get('n_profesor')}
  get a_profesor() {return this.ProfesorForm.get('a_profesor')}
  get tipo() {return this.ProfesorForm.get('tipo')}
  
  
/* 
//Formulario para editar
  EstudianteEForm = new FormGroup({
    ci_estudiante : new FormControl('', [Validators.required,Validators.maxLength(8),Validators.pattern('^[0-9]{1,8}$')]),
    n_estudiante: new FormControl('',[Validators.required]),
    a_estudiante: new FormControl('',[Validators.required]),
    semestre: new FormControl('',[Validators.required,Validators.min(6),Validators.max(10)]),
    estado: new FormControl('',[Validators.required]),
    carrera: new FormControl('',[Validators.required]),
    tutor: new FormControl('',[Validators.required]),
    tutor_c: new FormControl('',[Validators.required]),
    n_expediente: new FormControl('',[Validators.required]),
    nom_proyecto: new FormControl('',[Validators.required]),
    direccion: new FormControl('',[Validators.required]),
    aprobado: new FormControl('',[Validators.required])
  })

  get ci_estudianteE() {return this.ProfesorForm.get('ci_estudiante')}
  get n_estudianteE() {return this.ProfesorForm.get('n_estudiante')}
  get a_estudianteE() {return this.ProfesorForm.get('a_estudiante')}
  get semestreE() {return this.ProfesorForm.get('semestre')}
  get turnoE() {return this.ProfesorForm.get('turno')}
  get carreraE() {return this.ProfesorForm.get('carrera')}
  get tutorE() {return this.ProfesorForm.get('tutor')}
  get tutor_cE() {return this.ProfesorForm.get('tutor_c')}
  get n_expedienteE() {return this.ProfesorForm.get('n_expediente')}
  get nom_proyectoE() {return this.ProfesorForm.get('nom_proyecto')}
  get direccionE() {return this.ProfesorForm.get('direccion')}
  get aprobadoE() {return this.ProfesorForm.get('aprobado')}
  



 */


modalReference: NgbModalRef;
opened:any
closeResult: string;

open(content) {
  this.modalReference =  this.modalService.open(content)
  
        setTimeout(function(){ this.modalReference.close() }, 1000); //hacer que esta mierda funcione!!!!
      }


  createProfesor(){
    this.estudianteserviceservice.createProfesor(this.ProfesorForm.value).subscribe((estudiante)=>{
      this.open(this.opened)
      this.router.navigateByUrl('/festudiante',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['/festudiante'])
      });
    })
  }


  
 

}
