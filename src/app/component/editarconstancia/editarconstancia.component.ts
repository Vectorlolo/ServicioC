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


//  pdfmake-wrapper 
import { PdfMakeWrapper, Table,Txt,Img,Columns } from 'pdfmake-wrapper';






//bitacora
import { BitacoraService } from '../../services/bitacora.service'
import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';

export interface DialogData {
  info:any;
}

@Component({
  selector: 'app-editarconstancia',
  templateUrl: './editarconstancia.component.html',
  styleUrls: ['./editarconstancia.component.css']
})
export class EditarconstanciaComponent implements OnInit {




puta='PUTA'
/////////////////////////////////
//////////////PDF////////////////
/////////////////////////////////

  async generatePdf(){

    const pdf = new PdfMakeWrapper();
    pdf.pageMargins([ 70, 60, 60, 60 ]);
    //[izquierda,superior,derecha,inferior]

    this.servicoEs()
    this.fecha()
    pdf.pageSize('A4');

    

pdf.add(
  new Txt('REPÚBLICA BOLIVARIANA DE VENEZUELA').alignment('center').fontSize(9).end
  ); 
  pdf.add(
    new Txt('MINISTERIO DEL PODER POPULAR PARA LA DEFENSA').alignment('center').fontSize(9).end
    );
    pdf.add(
      new Txt('UNIVERSIDAD NACIONAL EXPERIMENTAL POLITÉCNICA').alignment('center').fontSize(9).end
      );
      pdf.add(
        new Txt('DE LA FUERZA ARMADA NACIONAL BOLIVARIANA').alignment('center').fontSize(9).end
        );
        pdf.add(
          new Txt('DECANATO NÚCLEO MIRANDA').alignment('center').fontSize(9).end
          );

          pdf.add( await new Img('../../../assets/img/logoPdfunefa.png').absolutePosition(485,40).height(63).width(56).build() );
          pdf.add( await new Img('../../../assets/img/logopdffuerzas.png').absolutePosition(30,40).height(63).width(56).build() );





          pdf.add(
            new Txt('            ' ).alignment('center').end
          );
          pdf.add(
            new Txt('            ' ).alignment('center').end
          );
          pdf.add(
            new Txt('            ' ).alignment('center').end
          );



      pdf.add(
        new Txt('C O N S T A N C I A').alignment('center').fontSize(14).bold().end
      ); 


      pdf.add(
        new Txt('            ' ).alignment('center').end
      );
      pdf.add(
        new Txt('            ' ).alignment('center').end
      );
      pdf.add(
        new Txt('            ' ).alignment('center').end
      );


      pdf.add(
        new Columns([ 'Quien suscribe, Cnel. HILDEMARO MARQUEZ CHACUTO Decano del Núcleo Miranda de la Universidad Nacional Experimental Politécnica de la Fuerza Armada (UNEFA), por medio de la presente hace constar que el Ciudadano:' + this.nombre +' '+ this.apellido + ', titular de la Cédula de Identidad N° ' + this.Ci_profe + ', prestó sus servicios en esta Universidad como Docente Contratado, ' +'con la categoría de ' + this.servicio + '('+this.servi+') '+'en los siguientes Períodos Académicos:']).alignment('justify').fontSize(12).end
        //new Txt('Quien suscribe, Cnel. HILDEMARO MARQUEZ CHACUTO Decano del').alignment('center').end
      );
    



      pdf.add(
        new Txt('            ' ).alignment('center').end
      );
      pdf.add(
        new Txt('            ' ).alignment('center').end
      );
      pdf.add(
        new Txt('            ' ).alignment('center').end
      );



  //pdf.header('Constancia')





//Tabla que se le agregara la labor
  var tabla =[
    ['SEMESTRE/TERMINO-LAPSO','ASIGNATURA(S)','CARRERA/ESPECIALIDAD','HORA.SEMESTRE','TOTAL HRS.']
  ]

//tablaCompleta  es un objeto de tipo Table que estara hecha de la variable tabla 
var tablaCompleta = new Table(tabla).fontSize(9).alignment('center').end


//Este for introduce en tabla los arrays correspondientes a cada labor
  for (let i = 0; i < this.constanciadesactualizada.labor.length; i++) {
    tabla.push([this.constanciadesactualizada.labor[i].periodo,this.constanciadesactualizada.labor[i].carrera,this.constanciadesactualizada.labor[i].materia,this.constanciadesactualizada.labor[i].horasT,this.constanciadesactualizada.labor[i].horasS])
  }
  //Comando que se usa para agregar tablas , claro que aqui agrego a "tablaCompleta directamente"
  pdf.add(tablaCompleta)


  pdf.add(
    new Txt('            ' ).alignment('center').end
  );
  pdf.add(
    new Txt('            ' ).alignment('center').end
  );
  pdf.add(
    new Txt('            ' ).alignment('center').end
  );

pdf.add(
  new Columns([ 'Constancia que se expide a petición de la parte interesada, para efectos de consolidar Curriculum Vitae, en la ciudad de Los Teques, a los Ocho (08) días del mes de '+ this.mes + ' de ' + this.año  ]).alignment('justify').fontSize(12).end
        //new Txt('Constancia que se expide a petición de la parte interesada, para efectos de' ).alignment('center').end
      );

      pdf.add(
    new Txt('            ' ).alignment('center').end
  );
  pdf.add(
    new Txt('            ' ).alignment('center').end
  );
  pdf.add(
    new Txt('            ' ).alignment('center').end
  );



  pdf.add(
    new Txt('Cnel. Hildemaro José Márquez Chacuto' ).alignment('center').fontSize(12).bold().end
  );
  pdf.add(
    new Txt('Decano Núcleo Miranda' ).alignment('center').fontSize(12).bold().end
  );
  pdf.add(
    new Txt('  Según nombramiento 0053 de fecha 19 de enero de 2018' ).alignment('center').fontSize(8).bold().end
  );
  pdf.add(
    new Txt('  “Excelencia Educativa Abierta al pueblo”' ).alignment('center').fontSize(9).bold().end
  );
  pdf.add(
    new Txt('    ¡CHÁVEZ VIVE…LA PATRIA SIGUE…! ' ).alignment('center').fontSize(9).bold().end
  );
  pdf.add(
    new Txt(' “INDEPENDENCIA Y PATRIA SOCIALISTA… VIVIREMOS Y VENCEREMOS” ' ).alignment('center').fontSize(9).bold().end
  );

  pdf.create().open()
  }
  
/////////////////////////////////
///////////FIN PDF///////////////
/////////////////////////////////




/* let date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
getHours()
getMinutes();
 */

fechahoy
mes
año
fecha(){
this.fechahoy = new Date()
this.mes= this.fechahoy.getMonth()+1
console.log(this.mes)
switch (this.mes) {
  case 1:
    this.mes = 'enero'
    break;
    case 2:
      this.mes = 'febrero'
      break;
      case 3:
        this.mes = 'marzo'
        break;
        case 4:
          this.mes = 'abril'
          break;
          case 5:
            this.mes = 'mayo'
            break;
            case 6:
              this.mes = 'junio'
              break;
              case 7:
                this.mes = 'julio'
                break;
                case 8:
                  this.mes = 'agosto'
                  break;
                  case 9:
                  this.mes = 'septiembre'
                  break;
                  case 10:
                  this.mes = 'octubre'
                  break;
                  case 11:
                  this.mes = 'noviembre'
                  break;
                  case 10:
                  this.mes = 'diciembre'
                  break;

  default:
    break;
}
this.año= this.fechahoy.getFullYear()

}



servi
servicio
///Servico Profesor///
//'TV','MC','DE','XD'
servicoEs(){
  if(this.servi == 'XD'){
    this.servicio = 'Tiempo Esclavo'
  }else if(this.servi == 'DE'){
    this.servicio = 'Tiempo Completo'
  }else if(this.servi == 'MC'){
    this.servicio = 'Tiempo Medio'
  }else if(this.servi == 'TV'){
    this.servicio = 'Tiempo Nose'
  }

}



  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private carreraService:CarreraService,
    private materiaService:MateriaService,
    private peridoService:PeriodoService,
    private profesorService:EstudianteServiceService,
    private constanciaService:ConstanciaService,
    public dialog:MatDialog,

    //bitacora
    private bitacoraService:BitacoraService

    ) { }

    materias:[]
    profesores:[]
    carreras:any
    constanciadesactualizada:any
    Ci_profe
    nombre:string
    apellido:string

    //bitacora
    usuarioOK
  ngOnInit() {
   //Hecho con el localStorange
   this.Ci_profe = JSON.parse(localStorage.getItem('ci'));

     //bitacora
      this.usuarioOK = JSON.parse(localStorage.getItem('user'));


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
  this.servi = profesor.tipo
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

  displayedColumns: string[] = ['periodo','carrera','materia','horasT','boton','botonE'];
  dataSource


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
//console.log(Math.floor(Number(this.semana))) 

  this.consForm.value.ci_profesor = this.Ci_profe
   this.constanciadesactualizada.labor.push({
    periodo:this.periodo0,
    carrera:this.carrera_real.carrera,
    materia:this.materia_real.nombre_mat,
    horasT:this.horasT,
    horasS:Number(this.horasT) * Math.round(Number(this.semana))
 
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
  this.constanciaService.updateConstancia(this.consForm.value).subscribe((ok:any)=>{
    if(ok.status==true){
      console.log(this.consForm.value)
this.constanciaService.getConstancia(this.Ci_profe).subscribe((constancia:any)=>{
  console.log(constancia)
this.constanciadesactualizada = constancia
  this.dataSource = new MatTableDataSource(constancia.labor);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

})
this.BitacoraEdita()
    }

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
          this.BitacoraEdita()

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
      this.BitacoraEdita()

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
/* get usuario() {return this.bitacoraForm.get('usuario')}
get accion() {return this.bitacoraForm.get('accion')}
get fecha() {return this.bitacoraForm.get('fecha')} */

BitacoraEdita(){
  this.bitacoraForm.value.usuario = this.usuarioOK.user
  this.bitacoraForm.value.accion = 'Edito Bitacora de Profesor: ' + this.Ci_profe
  this.bitacoraService.createBitacora(this.bitacoraForm.value).subscribe((bitacora)=>{
    console.log(bitacora)
  })
}



}
