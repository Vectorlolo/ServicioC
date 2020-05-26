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
import { Router } from '@angular/router';
import {NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BorrardialogComponent } from '../borrardialog/borrardialog.component'
import { EditardialogComponent } from '../editardialog/editardialog.component'


//bitacora
import { BitacoraService } from '../../services/bitacora.service'
import { __await } from 'tslib';

export interface DialogData {
  info:any;
}


@Component({
  selector: 'app-constancia',
  templateUrl: './constancia.component.html',
  styleUrls: ['./constancia.component.css']
})
export class ConstanciaComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private router:Router,
    private carreraService:CarreraService,
    private materiaService:MateriaService,
    private peridoService:PeriodoService,
    private profesorService:EstudianteServiceService,
    private constanciaService:ConstanciaService,
    private modalService: NgbModal,
    public dialog:MatDialog,
    //bitacora
private bitacoraService:BitacoraService


    ) { }

    


    materias:[]
    profesores:[]
    carreras:any

    //bitacora
usuarioOK
  ngOnInit() {

 //bitacora
 this.usuarioOK = JSON.parse(localStorage.getItem('usuario'));


    this.constanciaService.getConstancias().subscribe((constancias:any)=>{
      this.dataSource = new MatTableDataSource(constancias);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    /*  this.profesorService.getProfesores().subscribe((profesor:any)=>{
      this.dataSource = new MatTableDataSource(profesor);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }) */

    this.profesorService.getProfesores().subscribe((profesores:any)=>{
this.profesores = profesores

    })
    this.peridoService.getPeridos().subscribe((periodos:any)=>{
      delete(periodos.__v)
      this.periodoM = periodos
    /*   
      this.PeriodoMo() */
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
  
 displayedColumns: string[] = ['ci_profesor','periodo','carrera','materia','horasT','boton','botonE'];
  dataSource

  //Antes
 // displayedColumns: string[] = ['ci_profesor','n_profesor','a_profesor','boton','botonE'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
periodoM:[]
  /* 
  periodoM2:any
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
    await console.log(this.periodoM2)
   
  }

 */
  constanciaForm = new FormGroup({
    profesor: new FormControl('',[Validators.required]),
    periodo: new FormControl('',[Validators.required]),
    carrera: new FormControl('',[Validators.required]),
    materia: new FormControl('',[Validators.required]),
  })
  get profesor() {return this.constanciaForm.get('profesor')}
  get periodo() {return this.constanciaForm.get('periodo')}
  get carrera() {return this.constanciaForm.get('carrera')}
  get materia() {return this.constanciaForm.get('materia')}
  
  

//hacer un segundo formulario con dos datos ci y la combinacion de todos
//se combinaran cuando le de al boton de guardar 
consForm = new FormGroup({
  ci_profesor: new FormControl('',[Validators.required]),
  labor: new FormControl('',[Validators.required])
  })
  //puedes hacer que el labor sea un objeto con toda la informacion 
//'horas_teo','horas_pra','horas_lab'

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

  /*  Periodo(){
   this.peridoService.getPeriodo(this.constanciaForm.value.periodo).subscribe((periodo:any)=>{
    this.periodo0 = periodo
    this.semana= periodo.semana
    console.log(this.semana)

 })  
//.substring(0, 10)
} */


async constancia(){
 // console.log(this.periodo0)
  this.codigoMateria = this.constanciaForm.value.materia
  this.codigoCarrera = this.constanciaForm.value.carrera
  this.ci_profesor = this.constanciaForm.value.profesor
  

  
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

//this.periodo0.periodo +' ' + this.periodo0.inicio, this.constanciaForm.value.periodo                .slice(3, -2)

   this.consForm.value.ci_profesor = this.ci_profesor
   this.consForm.value.labor = [{
    periodo:this.periodo0,
    carrera:this.carrera_real.carrera,
    materia:this.materia_real.nombre_mat,
    horasT:this.horasT,
    horasS:Number(this.horasT) * Math.round(Number(this.semana))
    }]
     console.log(this.consForm.value)

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



modalReference: NgbModalRef;
opened:any
closeResult: string;

open(content) {
  this.modalReference =  this.modalService.open(content)
  
    //setTimeout(function(){ this.modalReference.close() }, 1000); //hacer que esta mierda funcione!!!!

        setInterval(() => this.modalReference.close(),2500 )

      }

//Para mostrar el nombre en la ventana modal de "Creado exitosamente"
nombre_modal:any
nombreprof(){
  let profe_name = this.profesores.filter((nombre:any)=>{
    return nombre.ci_profesor == this.constanciaForm.value.profesor
  })
this.nombre_modal = profe_name[0]
}


  Prueba(){


 this.constancia()


this.constanciaService.createConstancia(this.consForm.value).subscribe((ok:any)=>{
  if(ok.status== true){
this.open(this.opened)
    this.constanciaService.getConstancias().subscribe((constancias:any)=>{
      this.dataSource = new MatTableDataSource(constancias);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this.BitacoraCrea()
  }
  
//Antes
/* this.profesorService.getProfesores().subscribe((profesor:any)=>{
  this.dataSource = new MatTableDataSource(profesor);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;

}) */
})
}

async eliminarConstancia(id){

  const borrarDialog = this.dialog.open(BorrardialogComponent,{
    width:'300px',
    height:'135px'
  })  
  
  await borrarDialog.afterClosed().subscribe((result)=>{
    if(result){
      this.constanciaService.deleteConstancia(id).subscribe((borrdo)=>{

  this.constanciaService.getConstancias().subscribe((constancias:any)=>{
      this.dataSource = new MatTableDataSource(constancias);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    /* this.profesorService.getProfesores().subscribe((profesor:any)=>{
        this.dataSource = new MatTableDataSource(profesor);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      
      }) */
          console.log(borrdo)
      })
      this.BitacoraElimina()
    }
  })
 
  


}




info:any;


async editarConstancia(id){

  const editarDialog = this.dialog.open(EditardialogComponent,{
    width:'300px',
    height:'180px',
    data:{info:this.info}
   })

//El resultado puede retornar una cedula o un false
await editarDialog.afterClosed().subscribe((result)=>{
  if(result == false){
    this.router.navigateByUrl('/constancia',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/constancia'])
    });
 }else{
   localStorage.setItem('ci', JSON.stringify(this.info));


 this.router.navigateByUrl('/editarconstancia',{skipLocationChange:true}).then(()=>{
    this.router.navigate(['/editarconstancia'])
  });
 }
   
 
})

}


//Bitacora
bitaco

bitacoraForm = new FormGroup({
  usuario: new FormControl('',[Validators.required]),
  accion: new FormControl('',[Validators.required]),
  fecha: new FormControl('',[Validators.required]),
})


BitacoraCrea(){
  this.bitacoraForm.value.usuario = this.usuarioOK.user
  this.bitacoraForm.value.accion = 'Creo Constancia para profesor: ' + this.consForm.value.ci_profesor
  this.bitacoraService.createBitacora(this.bitacoraForm.value).subscribe((bitacora)=>{
    console.log(bitacora)
  })
}

BitacoraElimina(){
  this.bitacoraForm.value.usuario = this.usuarioOK.user
  this.bitacoraForm.value.accion = 'Elimino Constancia: ' + this.bitaco
  this.bitacoraService.createBitacora(this.bitacoraForm.value).subscribe((bitacora)=>{
    console.log(bitacora)
  })
}

}
