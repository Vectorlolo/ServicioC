import { Component, OnInit,Input,Inject} from '@angular/core';
import { CarreraService } from '../../services/carrera.service';
import { MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material';
import {DialogData} from '../carrera/carrera.component'
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-editarcarrera',
  templateUrl: './editarcarrera.component.html',
  styleUrls: ['./editarcarrera.component.css']
})
export class EditarcarreraComponent implements OnInit {

  constructor(
    private carreraservice: CarreraService,
    public editarcarrera:MatDialogRef<EditarcarreraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

  ) { }
  
  ngOnInit() {
    this.carreraservice.getCarrera(this.data.info).subscribe((carrera:any)=>{
      delete(carrera.__v)
      delete(carrera._id)
      this.CarreraForm.setValue(carrera)
    })
  }
  

  turnos= [{value:"D"},{value:"N"}]


  CarreraForm = new FormGroup({
    codigo_c: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.pattern('[0-9]{4}$')]),
    carrera : new FormControl('', [Validators.required]),
    turno: new FormControl('',[Validators.required]),
    estado: new FormControl({value:true,disabled:true})

  })

  get codigo_c() {return this.CarreraForm.get('codigo_c')}
  get carrera() {return this.CarreraForm.get('carrera')}
  get turno() {return this.CarreraForm.get('turno')}


/* 
  editarCarrera(id){
    this.carreraservice.getCarrera(id).subscribe((carrera:any)=>{
      delete(carrera._id)
      delete(carrera.__v)
      this.CarreraForm.setValue(carrera)
    })
  }
 */

 /*  guardarEditado(){
    this.carreraservice.updateCarrera(this.CarreraForm.value).subscribe((carrera)=>{
      console.log(carrera)
       })
  }
   */




 Aceptar(){
     this.carreraservice.updateCarrera(this.CarreraForm.value).subscribe((carrera)=>{
    console.log(carrera)
    })
    this.editarcarrera.close(true)
  }

  Cancelar(){
    this.editarcarrera.close(false)
  }


  

}
