import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EstudianteServiceService } from '../../services/estudiante-service.service';
import { CarreraService } from '../../services/carrera.service';
import {DialogData} from '../findestudiante/findestudiante.component'
import { from } from 'rxjs';
@Component({
  selector: 'app-editarestudiante',
  templateUrl: './editarestudiante.component.html',
  styleUrls: ['./editarestudiante.component.css']
})
export class EditarestudianteComponent implements OnInit {

carreras:any

  constructor(
    private estudianteServiceService:EstudianteServiceService,
    public editarestudiante:MatDialogRef<EditarestudianteComponent>,
    public carreraService:CarreraService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
   
  ) { }

  ngOnInit() {

/////////////////////////            //////////////////
//colocar en los form s las opciones correspondientes llamar al carreras service, etc
/////////////////////////            //////////////////
this.carreraService.getCarreras().subscribe(carreras => this.carreras = carreras)



    this.estudianteServiceService.getEstudiante(this.data.info).subscribe((estudiante:any)=>{
      delete(estudiante.__v)
      delete(estudiante._id)
      this.EstudianteForm.setValue(estudiante)
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


  Aceptar(){


/*   updateEstudiante(){
    this.estudianteServiceService.updateEstudiante(this.EstudianteForm.value).subscribe((estudiante:any)=>{
      this.router.navigateByUrl('/festudiante',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['/festudiante'])
      });
    })
  } */


    this.estudianteServiceService.updateEstudiante(this.EstudianteForm.value).subscribe((estudiante:any)=>{
    console.log(this.EstudianteForm.value)
    
  })

  this.editarestudiante.close(true)


}
Cancelar(){
  this.editarestudiante.close(false)
}

}
