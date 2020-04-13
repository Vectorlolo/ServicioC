import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../../services/carrera.service';
import { MateriaService } from '../../services/materia.service';
import {FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-constancia',
  templateUrl: './constancia.component.html',
  styleUrls: ['./constancia.component.css']
})
export class ConstanciaComponent implements OnInit {

  constructor(
    private carreraService:CarreraService,
    private materiaService:MateriaService
    ) { }


    materias:[]
    carreras:any
  ngOnInit() {
this.carreraService.getCarreras().subscribe((carreras:any)=>{
  delete(carreras.__v)
  delete(carreras._id)
  this.carreras = carreras
})

this.materiaService.getMaterias().subscribe((materias:any)=>{
  delete(materias.__v)
  delete(materias._id)
  this.materias = materias
})

  }





  constanciaForm = new FormGroup({
    carrera: new FormControl('',[Validators.required]),
    materia: new FormControl('',[Validators.required]),
  })


  get carrera() {return this.constanciaForm.get('carrera')}
  get materia() {return this.constanciaForm.get('materia')}
  
  





codigo:any

carreraSelect = false
materias2:any
haymateria(){
  this.codigo = this.constanciaForm.value
  if(this.codigo.carrera == ''||this.codigo.carrera  ==undefined ||this.codigo.carrera  == null){
    this.carreraSelect=false
  }else{
    this.carreraSelect=true
  }
  this.findMateria()
}


true:boolean
async findMateria(){
  this.materias2= []
 
  let materias2 = this.materias.filter((materia:any)=>{
    for(let car of materia.carrera){
      //console.log(materia.carrera+' esta es la materia.carrera')
if(car == this.codigo.carrera){
  //console.log(materia)
  return materia
}
    }

// ESTA DE AQUI ABAJO TAMBIEN SIRVE PERO MEJOR NO LO USES ES MAS COMPLEJO
    /* let materias22 = materia.carrera.filter((materia2:any)=>{
      console.log(materia2)
      if(materia2 ==  this.codigo.carrera){
        this.true = true
      }
      //return materia == this.codigo.carrera
    })
if(this.true==true){
  this.true=false
 return materia
} */

 })
 this.materias2 = materias2
 console.log(materias2)

 

}








}
