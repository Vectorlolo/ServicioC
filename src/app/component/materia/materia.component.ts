
  import { Component, OnInit,ViewChild } from '@angular/core';
  import {FormGroup,FormControl, Validators } from '@angular/forms';
  import { FormBuilder } from '@angular/forms';
  import { Router } from '@angular/router';
  import { MateriaService } from '../../services/materia.service';
  //import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
  import { CarreraService } from '../../services/carrera.service';
  import {NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
  import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource, throwToolbarMixedModesError ,MAT_DIALOG_DATA, MatDialog, MatTextareaAutosize } from '@angular/material';
import { BorrardialogComponent } from '../borrardialog/borrardialog.component'
import { EditarMateriaComponent } from '../editar-materia/editar-materia.component'


export interface DialogData {
  info:any;
}
@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private router:Router,
    private materiaService:MateriaService,
    private carreracervice: CarreraService,
    private formbuilder: FormBuilder,
    private modalService: NgbModal,
    public dialog: MatDialog,
    ) { }

    carreras:any

  ngOnInit() {

    this.materiaService.getMaterias().subscribe((materias:any)=>{
      console.log(materias)
      delete(materias.__V)
      this.dataSource = new MatTableDataSource(materias);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this.carreracervice.getCarreras() 
.subscribe( carrera =>  this.carreras = carrera)
  }

  displayedColumns: string[] = ['codigo_materia','nombre_mat','horas_teo','horas_pra','horas_lab','carrera','boton','botonE' ];
  dataSource

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  materiasForm  = new FormGroup({
    codigo_materia: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.pattern('^[A-Z]{3}\-[0-9]{5}$')]),
    nombre_mat: new FormControl('',[Validators.required]),
    horas_teo: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
    horas_pra: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
    horas_lab: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
    carrera: new FormControl('',[Validators.required])    
  });

  get codigo_materia() {return this.materiasForm.get('codigo_materia')}
  get nombre_mat() {return this.materiasForm.get('nombre_mat')}
  get horas_teo() {return this.materiasForm.get('horas_teo')}
  get horas_pra() {return this.materiasForm.get('horas_pra')}
  get horas_lab() {return this.materiasForm.get('horas_lab')}
  get carrera() {return this.materiasForm.get('carrera')}


  
  modalReference: NgbModalRef;
  opened:any
  closeResult: string;
  
  open(content) {
    this.modalReference =  this.modalService.open(content)
    
          setTimeout(function(){ this.modalReference.close() }, 1000); //hacer que esta mierda funcione!!!!
        }
  
  
    createMateria(){
      this.materiaService.createMateria(this.materiasForm.value).subscribe((materia)=>{
        this.open(this.opened)
        this.materiaService.getMaterias().subscribe((materias:any)=>{
          console.log(materias)
          delete(materias.__V)
          this.dataSource = new MatTableDataSource(materias);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
      })
    }

   async deleteMateria(id){
    const borrarDialog = this.dialog.open(BorrardialogComponent,{
      width: '300px',
      height: '135px'
    })

    await borrarDialog.afterClosed().subscribe((result)=>{
      console.log(result )
      if(result){
         this.materiaService.deleteMateria(id).subscribe((msg)=>{
         
          this.materiaService.getMaterias().subscribe((materias:any)=>{
            delete(materias.__V)
            this.dataSource = new MatTableDataSource(materias);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          })
         })
      }
    })

    }



    info:any;

    async  editarMateria(){
      const editarDialog = this.dialog.open(EditarMateriaComponent,{
        width: '780px',
        height: '480px',
        data:{info:this.info}
       })
      
      await editarDialog.afterClosed().subscribe((result)=>{
        
       if(result){
      
        this.materiaService.getMaterias().subscribe((materias:any)=>{
          console.log(materias)
          delete(materias.__V)
          this.dataSource = new MatTableDataSource(materias);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
          
      
            }
            })
    }
  
 


}


