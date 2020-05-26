import { Component, OnInit,Input,Inject } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ConstanciaService } from '../../services/constancia.service'
import { DialogData } from '../editarconstancia/editarconstancia.component'
import { CarreraService } from '../../services/carrera.service';
import { MateriaService } from '../../services/materia.service';
import { PeriodoService } from '../../services/periodo.service';






@Component({
  selector: 'app-editarlabor',
  templateUrl: './editarlabor.component.html',
  styleUrls: ['./editarlabor.component.css']
})
export class EditarlaborComponent implements OnInit {







  constructor(
    private constanciaService:ConstanciaService,
    public editarcarrera:MatDialogRef<EditarlaborComponent>,
    private carreraService:CarreraService,
    private materiaService:MateriaService,
    private peridoService:PeriodoService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

  ) { }


  materias:[]
  carreras:any

  Ci_profe
  constanciadesactualizada
  ngOnInit() {
//Hacerlo con el localStorange
this.Ci_profe = JSON.parse(localStorage.getItem('ci'));
  

//debes de encontrar la manera de enviar la cedula del docente para que sirva con todos los que existen 
this.constanciaService.getConstancia(this.Ci_profe).subscribe((constancia:any)=>{
  console.log(constancia.labor[this.data.info])
this.constanciadesactualizada = constancia
delete(constancia.__v)
delete(constancia._id)
this.constanciaForm.setValue(constancia.labor[this.data.info])
this.c = constancia.labor[this.data.info].carrera
this.m = constancia.labor[this.data.info].materia
console.log(this.constanciaForm.value)
})


this.peridoService.getPeridos().subscribe((periodos:any)=>{
  delete(periodos.__v)
  this.periodoM = periodos
})

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
c
m

//FUNCION PARA QUE FUNCIONENE LOS PERIODOS
periodoM:[]
  /* periodoM2:any
  async PeriodoMo(){
     this.periodoM2 = this.periodoM.filter((periodo:any)=>{
      periodo.inicio = periodo.inicio.substring(0, 10)
      periodo.final =  periodo.final.substring(0, 10)
      
  return periodo
      for(let i =0;i<=this.periodoM.length;i++ ){
        periodo.inicio.substring(0, 10)
        
      }
      for(let fin of periodo.final ){
        fin.substring(0, 10)
      }
      for(let i =0;i<=this.periodoM.length;i++){
      this.periodoM[i].inicio
    }
    })
   
  } */

//FUNCION PARA QUE FUNCIONEN LAS MATERIAS
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






constanciaForm = new FormGroup({
  periodo: new FormControl('',[Validators.required]),
  carrera: new FormControl('',[Validators.required]),
  materia: new FormControl('',[Validators.required]),
  horasT: new FormControl({disabled:true}),
  horasS:new FormControl({disabled:true})
})
get periodo() {return this.constanciaForm.get('periodo')}
get carrera() {return this.constanciaForm.get('carrera')}
get materia() {return this.constanciaForm.get('materia')}

consForm = new FormGroup({
  ci_profesor: new FormControl('',[Validators.required]),
  labor: new FormControl('',[Validators.required])
  })




  ArrayLabor:any
  nuevoLAbor:any
  ci_profesor:string
  labor:[]
  codigoMateria:string
  materia_real:any
  codigoCarrera:string
  carrera_real:any
  horasT:string
  semana:Number
  periodo0
  indice
  async constancia(){
    this.codigoMateria = this.constanciaForm.value.materia
    this.codigoCarrera = this.constanciaForm.value.carrera
    //this.ci_profesor = this.Ci_profe
    
  
    
    let materias3 = this.materias2.filter((materias:any)=>{
        if(materias.codigo_materia == this.codigoMateria){
          return materias
        }
      
    })
  
    let carreras3 = this.carreras.filter((carreras:any)=>{
      if(carreras.codigo_c == this.codigoCarrera){
        return carreras
      }
    })
  
  
  this.materia_real = materias3[0]
  this.horasT = this.materia_real.horas_teo + this.materia_real.horas_pra + this.materia_real.horas_lab
  
  this.carrera_real = carreras3[0]
  
  
  this.periodo0 = this.constanciaForm.value.periodo
  this.indice = this.periodo0.indexOf( ":" ); 
  this.semana = this.periodo0.slice(this.indice+1,this.periodo0.length)
  this.periodo0 = this.periodo0.slice(0,this.indice)

  
    this.consForm.value.ci_profesor = this.Ci_profe
    this.ArrayLabor =  this.constanciadesactualizada.labor
    this.nuevoLAbor={
      periodo:this.periodo0,
      carrera:this.carrera_real.carrera,
      materia:this.materia_real.nombre_mat,
      horasT:this.horasT,
      horasS:Number(this.horasT) * Math.round(Number(this.semana))
    }

    this.ArrayLabor.splice(this.data.info,1,this.nuevoLAbor)

    this.consForm.value.labor = this.ArrayLabor
    console.log(this.ArrayLabor)
    await console.log(this.consForm.value)
  
  }







  Aceptar(){
    this.constancia()
    this.constanciaService.updateConstancia(this.consForm.value).subscribe((ok)=>{
      console.log(this.consForm.value)

        })



   this.editarcarrera.close(true)

   
 }

 Cancelar(){
   this.editarcarrera.close(false)
  
 }
}
