import { Component, OnInit,ViewChild } from '@angular/core';
import { CarreraService } from '../../services/carrera.service';
import { MateriaService } from '../../services/materia.service';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { PeriodoService } from '../../services/periodo.service';
import { EstudianteServiceService } from '../../services/estudiante-service.service'
import { ConstanciaService } from '../../services/constancia.service'
import { MatTableDataSource, throwToolbarMixedModesError ,MAT_DIALOG_DATA, MatDialog, MatTextareaAutosize } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { BorrardialogComponent } from '../borrardialog/borrardialog.component'
import { EditardialogComponent } from '../editardialog/editardialog.component'
import { EditarlaborComponent } from '../editarlabor/editarlabor.component'

export interface DialogData {
  info:any;
}

@Component({
  selector: 'app-editarconstancia',
  templateUrl: './editarconstancia.component.html',
  styleUrls: ['./editarconstancia.component.css']
})
export class EditarconstanciaComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private carreraService:CarreraService,
    private materiaService:MateriaService,
    private peridoService:PeriodoService,
    private profesorService:EstudianteServiceService,
    private constanciaService:ConstanciaService,
    public dialog:MatDialog

    ) { }

    materias:[]
    profesores:[]
    carreras:any
    constanciadesactualizada:any
    Ci_profe
    nombre:string
    apellido:string
  ngOnInit() {

   //Hacerlo con el localStorange
   this.Ci_profe = JSON.parse(localStorage.getItem('ci'));
  

//debes de encontrar la manera de enviar la cedula del docente para que sirva con todos los que existen 
this.constanciaService.getConstancia(this.Ci_profe).subscribe((constancia:any)=>{
  console.log(constancia)
this.constanciadesactualizada = constancia
  this.dataSource = new MatTableDataSource(constancia.labor);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

})
this.profesorService.getProfesor(this.Ci_profe).subscribe((profesor:any)=>{
  this.nombre = profesor.n_profesor
  this.apellido = profesor.a_profesor
})

    
          this.peridoService.getPeridos().subscribe((periodos:any)=>{
            delete(periodos.__v)
            this.periodoM = periodos
            this.PeriodoMo()
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

  displayedColumns: string[] = ['periodo','carrera','materia','horasT','boton','botonE'];
  dataSource


  periodoM:[]
  periodoM2:any
  async PeriodoMo(){
     this.periodoM2 = this.periodoM.filter((periodo:any)=>{
      periodo.inicio = periodo.inicio.substring(0, 10)
      periodo.final =  periodo.final.substring(0, 10)
      
  return periodo
      /* for(let i =0;i<=this.periodoM.length;i++ ){
        periodo.inicio.substring(0, 10)
        
      }
      for(let fin of periodo.final ){
        fin.substring(0, 10)
      } */
      /* for(let i =0;i<=this.periodoM.length;i++){
      this.periodoM[i].inicio
    } */
    })
   
  }


  constanciaForm = new FormGroup({
    periodo: new FormControl('',[Validators.required]),
    carrera: new FormControl('',[Validators.required]),
    materia: new FormControl('',[Validators.required]),
  })
  get periodo() {return this.constanciaForm.get('periodo')}
  get carrera() {return this.constanciaForm.get('carrera')}
  get materia() {return this.constanciaForm.get('materia')}
  



//se combinaran cuando le de al boton de guardar 
consForm = new FormGroup({
  ci_profesor: new FormControl('',[Validators.required]),
  labor: new FormControl('',[Validators.required])
  })
  //puedes hacer que el labor sea un objeto con toda la informacion 


  ci_profesor:string
  labor:[]
  codigoMateria:string
  materia_real:any
  codigoCarrera:string
  carrera_real:any
  horasT:string
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



  this.consForm.value.ci_profesor = this.Ci_profe
   this.constanciadesactualizada.labor.push({
    periodo:this.constanciaForm.value.periodo,
    carrera:this.carrera_real.carrera,
    materia:this.materia_real.nombre_mat,
    horasT:this.horasT    
  })
  this.consForm.value.labor = this.constanciadesactualizada.labor
  console.log(this.constanciadesactualizada)
  await console.log(this.consForm.value)

}

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



Agregar(){
  this.constancia()
  this.constanciaService.updateConstancia(this.consForm.value).subscribe((ok)=>{
console.log(this.consForm.value)
this.constanciaService.getConstancia(this.Ci_profe).subscribe((constancia:any)=>{
  console.log(constancia)
this.constanciadesactualizada = constancia
  this.dataSource = new MatTableDataSource(constancia.labor);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

})
  })

}


ArrayLabor:[]
async eliminarConstancia(id){

  const borrarDialog = this.dialog.open(BorrardialogComponent,{
    width:'300px',
    height:'135px'
  })  
  
  await borrarDialog.afterClosed().subscribe((result)=>{
    if(result){
     this.ArrayLabor =  this.constanciadesactualizada.labor
      this.ArrayLabor.splice(id,1,)
      console.log(id)
      this.consForm.value.ci_profesor = this.Ci_profe
      this.consForm.value.labor = this.ArrayLabor
      console.log(this.ArrayLabor)

      this.constanciaService.updateConstancia(this.consForm.value).subscribe((ok)=>{
        console.log(this.consForm.value)
        this.constanciaService.getConstancia(this.Ci_profe).subscribe((constancia:any)=>{
        this.constanciadesactualizada = constancia
          this.dataSource = new MatTableDataSource(constancia.labor);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
        
        })
          })
    }
  })
}


info:any;


async editarConstancia(id){
  const editarDialog = this.dialog.open(EditarlaborComponent,{
    width:'600px',
    height:'500px',
    data:{info:this.info}
  })

  await editarDialog.afterClosed().subscribe((result)=>{
  
    if(result){
      this.constanciaService.getConstancia(this.Ci_profe).subscribe((constancia:any)=>{
        console.log(constancia)
      this.constanciadesactualizada = constancia
        this.dataSource = new MatTableDataSource(constancia.labor);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
      
      })
   
    }
         })


}



}
