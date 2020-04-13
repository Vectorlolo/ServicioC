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
    public dialog: MatDialog,) { }

  ngOnInit() {

    this.peridoService.getPeridos().subscribe((periodos:any)=>{
      delete(periodos.__v)
      this.periodoM = periodos
      this.PeriodoMo()
      this.dataSource = new MatTableDataSource(this.periodoM2);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  minDate = new Date(2007, 0, 1);//para el datapiker

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
  await console.log(this.periodoM2)
 
}
  
  displayedColumns: string[] = ['periodo','inicio','final','boton','botonE' ];
  dataSource


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
      
            setTimeout(function(){ console.log('Creado')}, 1000); //hacer que esta mierda funcione!!!!
          }


          createPeriodo(){
           // this.form = this.periodosForm.value
           // this.id = this.form.periodo + this.form.inicio // ver si funciona
            this.peridoService.createPeriodo(this.periodosForm.value).subscribe((periodo)=>{
              this.open(this.opened)
              this.peridoService.getPeridos().subscribe((periodos:any)=>{
                delete(periodos.__v)
                this.periodoM = periodos
                this.PeriodoMo()
                this.dataSource = new MatTableDataSource(this.periodoM2);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              })
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
                    this.periodoM = periodos
                    this.PeriodoMo()
                    this.dataSource = new MatTableDataSource(this.periodoM2);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                  })
                })
              }
            })
          }

          info:any
      async    editarPeriodo(){
            const editarDialog = this.dialog.open(EditarPeriodoComponent,{
              width: '780px',
              height: '480px',
              data:{info:this.info}
             })

             await editarDialog.afterClosed().subscribe((result)=>{
               if(result){

                this.peridoService.getPeridos().subscribe((periodos:any)=>{
                  delete(periodos.__v)
                  this.periodoM = periodos
                  this.PeriodoMo()
                  this.dataSource = new MatTableDataSource(this.periodoM2);
                  this.dataSource.paginator = this.paginator;
                  this.dataSource.sort = this.sort;
                })
                
               }
             })
          }


}
