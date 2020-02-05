import { Component, OnInit,Input } from '@angular/core';
import { CarreraService } from '../../services/carrera.service';
import { MatDialogRef } from '@angular/material';

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

  ) { }
  
  



  CarreraForm = new FormGroup({
    carrera : new FormControl('', [Validators.required])
  })
  get carrera() {return this.CarreraForm.get('carrera')}



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
     
     this.carreraservice.createCarrera(this.CarreraForm.value).subscribe((carrera)=>{
    console.log(carrera)
    })
    this.editarcarrera.close(true)
  }

  Cancelar(){
    this.editarcarrera.close(false)
  }


  ngOnInit() {
  }

}
