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
//this.carreraService.getCarreras().subscribe(carreras => this.carreras = carreras)



    this.estudianteServiceService.getProfesor(this.data.info).subscribe((profesor:any)=>{
      delete(profesor.__v)
      delete(profesor._id)
      console.log(profesor)
      this.ProfesorForm.setValue(profesor)
    })

  }



  tipoo= [{name:"Tiempo completo",value:"TV"},{name:"Tiempo medio",value:"MC"},{name:"Tiempo  nose",value:"DE"},{name:"Tiempo esclavo",value:"XD"}]

  


  ProfesorForm = new FormGroup({
    ci_profesor : new FormControl('', [Validators.required,Validators.maxLength(8),Validators.pattern('^[0-9]{1,8}$')]),
    n_profesor: new FormControl('',[Validators.required]),
    a_profesor: new FormControl('',[Validators.required]),
    tipo: new FormControl('',[Validators.required])
  })


  get ci_profesor() {return this.ProfesorForm.get('ci_profesor')}
  get n_profesor() {return this.ProfesorForm.get('n_profesor')}
  get a_profesor() {return this.ProfesorForm.get('a_profesor')}
  get tipo() {return this.ProfesorForm.get('tipo')}
  
  
  Aceptar(){


/*   updateEstudiante(){
    this.estudianteServiceService.updateEstudiante(this.Profesor.value).subscribe((estudiante:any)=>{
      this.router.navigateByUrl('/festudiante',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['/festudiante'])
      });
    })
  } */


    this.estudianteServiceService.updateProfesor(this.ProfesorForm.value).subscribe((profesor:any)=>{
    console.log(profesor)
    
  })

  this.editarestudiante.close(true)


}
Cancelar(){
  this.editarestudiante.close(false)
}

}
