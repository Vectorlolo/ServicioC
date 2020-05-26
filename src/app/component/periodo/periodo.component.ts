import { Component, OnInit,ViewChild} from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PeriodoService } from '../../services/periodo.service';
import {NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource, throwToolbarMixedModesError ,MAT_DIALOG_DATA, MatDialog, MatTextareaAutosize } from '@angular/material';
import { BorrardialogComponent } from '../borrardialog/borrardialog.component'
import { EditarPeriodoComponent } from '../editar-periodo/editar-periodo.component'

//bitacora
import { BitacoraService } from '../../services/bitacora.service'


export interface DialogData {
  info:any;
}


@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private router:Router,
    private peridoService:PeriodoService,
    private formbuilder: FormBuilder,
    private modalService: NgbModal,
    public dialog: MatDialog,
    //bitacora
private bitacoraService:BitacoraService
) { }

//bitacora
usuarioOK
  ngOnInit() {

     //bitacora
 this.usuarioOK = JSON.parse(localStorage.getItem('usuario'));

    this.peridoService.getPeridos().subscribe((periodos:any)=>{
      delete(periodos.__v)
      //this.periodoM = periodos
      //this.PeriodoMo()
      this.dataSource = new MatTableDataSource(periodos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  minDate = new Date(2007, 0, 1);//para el datapiker

/* periodoM:[]
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
 
} */
  
  displayedColumns: string[] = ['periodo','inicio','final','boton','botonE' ];
  dataSource


periodos=[{value:'I'},{value:'II'}]



 

ini
fin
fecha
fechaR
fecha2
fechaR2
diferencia_En_Tiempo
diferencia_En_Dias
semanas
finesSemana
diasL
/* date1 = new Date("05/1/2020"); 
    date2 = new Date("05/29/2020");  
  To calculate the time difference of two dates 
 Difference_In_Time = this.date2.getTime() - this.date1.getTime(); 
  
 To calculate the no. of days between two dates 
 Difference_In_Days = this.Difference_In_Time / (1000 * 3600 * 24); 
 semanasS= this.Difference_In_Days/7
 finesds= this.semanasS * 2
 diasLaborables=this.Difference_In_Days - this.finesds */
  Dia(){
 /*    console.log(this.Difference_In_Days)
    console.log(this.semanas)
    console.log(this.diasLaborables) */ 

    this.ini = this.periodosForm.value.inicio
  
    this.fecha = (this.ini.getMonth()+1)  +'/'+this.ini.getDate()+'/'+this.ini.getFullYear()
    this.fechaR = new Date(this.fecha)

    this.fin = this.periodosForm.value.final
   
    this.fecha2 = (this.fin.getMonth()+1) +'/'+this.fin.getDate() +'/'+this.fin.getFullYear()
    this.fechaR2 = new Date(this.fecha2)
   


this.diferencia_En_Tiempo = this.fechaR2.getTime() - this.fechaR.getTime()
this.diferencia_En_Dias = this.diferencia_En_Tiempo /(1000 * 3600 * 24)
this.semanas = this.diferencia_En_Dias/7
this.finesSemana = this.semanas * 2
//this.diasL = this.diferencia_En_Dias - this.finesSemana
this.periodosForm.value.semana = this.semanas
this.periodosForm.value.inicio =this.fecha
this.periodosForm.value.final =this.fecha2
  }





  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  periodosForm = new FormGroup({
 //   id: new FormControl('',[Validators.required]),
    periodo:new FormControl('',[Validators.required]),
    inicio:new FormControl('',[Validators.required]),
    final: new FormControl('',[Validators.required]),
    semana:new FormControl('')
  })
   // id:any
   // form:any
    get periodo() { return this.periodosForm.get('periodo') }
    get inicio() { return this.periodosForm.get('inicio') }
    get final() { return this.periodosForm.get('final') }


    modalReference: NgbModalRef;
    opened:any
    closeResult: string;

    open(content) {
      this.modalReference =  this.modalService.open(content)
      
           // setTimeout(function(){ console.log('Creado')}, 1000); //hacer que esta mierda funcione!!!!
           setInterval(() => this.modalReference.close(),1000 )

          }


          createPeriodo(){
           // this.form = this.periodosForm.value
           // this.id = this.form.periodo + this.form.inicio // ver si funciona
          this.Dia()
            this.peridoService.createPeriodo(this.periodosForm.value).subscribe((periodo:any)=>{
              console.log(this.periodosForm.value)
              if(periodo.status==true){
                this.open(this.opened)
                this.peridoService.getPeridos().subscribe((periodos:any)=>{
                  delete(periodos.__v)
                  //this.periodoM = periodos
                 //this.PeriodoMo()
                this.dataSource = new MatTableDataSource(periodos);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              })
              this.BitacoraCrea()

              }
              
            })
          }

          async deletePeriodo(id){
            const borrarDialog = this.dialog.open(BorrardialogComponent,{
              width: '300px',
              height: '135px'
            })

            await borrarDialog.afterClosed().subscribe((result)=>{
              if(result){
                this.peridoService.deletePerido(id).subscribe((msg)=>{
                  this.peridoService.getPeridos().subscribe((periodos:any)=>{
                    delete(periodos.__v)
                    //this.periodoM = periodos
                    //this.PeriodoMo()
                    this.dataSource = new MatTableDataSource(periodos);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                  })
                })

                this.BitacoraElimina()
              }
            })
          }

          info:any
      async    editarPeriodo(){
            const editarDialog = this.dialog.open(EditarPeriodoComponent,{
              width: '900px',
              height: '320px',
              data:{info:this.info}
             })

             await editarDialog.afterClosed().subscribe((result)=>{
               if(result){

                this.peridoService.getPeridos().subscribe((periodos:any)=>{
                  delete(periodos.__v)
                  //this.periodoM = periodos
                  //this.PeriodoMo()
                  this.dataSource = new MatTableDataSource(periodos);
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


BitacoraCrea(){
  this.bitacoraForm.value.usuario = this.usuarioOK.user
  this.bitacoraForm.value.accion = 'Creo Periodo: ' + this.periodosForm.value.periodo +' '+ this.periodosForm.value.inicio
  this.bitacoraService.createBitacora(this.bitacoraForm.value).subscribe((bitacora)=>{
    console.log(bitacora)
  })
}

BitacoraElimina(){
  this.bitacoraForm.value.usuario = this.usuarioOK.user
  this.bitacoraForm.value.accion = 'Elimino Periodo: ' + this.bitaco
  this.bitacoraService.createBitacora(this.bitacoraForm.value).subscribe((bitacora)=>{
    console.log(bitacora)
  })
}
BitacoraEdita(){
  this.bitacoraForm.value.usuario = this.usuarioOK.user
  this.bitacoraForm.value.accion = 'Edito Periodo: ' + this.bitaco
  this.bitacoraService.createBitacora(this.bitacoraForm.value).subscribe((bitacora)=>{
    console.log(bitacora)
  })
}


}
