import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import { MatTableDataSource,MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatTextareaAutosize } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteServiceService } from '../../services/estudiante-service.service';
import { BorrardialogComponent } from '../borrardialog/borrardialog.component'
import { EditarestudianteComponent } from '../editarestudiante/editarestudiante.component';
import { InfoestudianteComponent } from '../infoestudiante/infoestudiante.component';
import { async } from '@angular/core/testing';

export interface DialogData {
  info:any;
}

@Component({
  selector: 'app-findestudiante',
  templateUrl: './findestudiante.component.html',
  styleUrls: ['./findestudiante.component.css']
})
export class FindestudianteComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private router:Router,
    public estudianteServiceService:EstudianteServiceService,
    public dialog:MatDialog
    ) { }

  ngOnInit() {
    this.estudianteServiceService.getEstudiantes().subscribe((estudiante:any)=>{
      this.dataSource = new MatTableDataSource(estudiante);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })


  
  }

  displayedColumns: string[] = ['ci_estudiante','n_estudiante','a_estudiante','n_expediente','aprobado','boton','botonE','botonI'];
  dataSource


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



/* 
  EstudianteForm = new FormGroup({
    ci_estudiante : new FormControl('', [Validators.required,Validators.maxLength(8),Validators.pattern('^[0-9]{1,8}$')]),
    n_estudiante: new FormControl('',[Validators.required]),
    a_estudiante: new FormControl('',[Validators.required]),
    semestre: new FormControl('',[Validators.required,Validators.min(6),Validators.max(10)]),
    turno: new FormControl('',[Validators.required]),
    carrera: new FormControl('',[Validators.required]),
    tutor: new FormControl('',[Validators.required]),
    tutor_c: new FormControl('',[Validators.required]),
    n_expediente: new FormControl('',[Validators.required]),
    nom_proyecto: new FormControl('',[Validators.required]),
    direccion: new FormControl('',[Validators.required]),
    aprobado: new FormControl('',[Validators.required])
  })


  get ci_estudiante() {return this.EstudianteForm.get('ci_estudiante')}
  get n_estudiante() {return this.EstudianteForm.get('n_estudiante')}
  get a_estudiante() {return this.EstudianteForm.get('a_estudiante')}
  get semestre() {return this.EstudianteForm.get('semestre')}
  get turno() {return this.EstudianteForm.get('turno')}
  get carrera() {return this.EstudianteForm.get('carrera')}
  get tutor() {return this.EstudianteForm.get('tutor')}
  get tutor_c() {return this.EstudianteForm.get('tutor_c')}
  get n_expediente() {return this.EstudianteForm.get('n_expediente')}
  get nom_proyecto() {return this.EstudianteForm.get('nom_proyecto')}
  get direccion() {return this.EstudianteForm.get('direccion')}
  get aprobado() {return this.EstudianteForm.get('aprobado')}
  

 */



info:any

async borrarEstudiante(id){

  const borrarDialog = this.dialog.open(BorrardialogComponent,{
    width:'300px',
    height:'135px'
  })  
  
  await borrarDialog.afterClosed().subscribe((result)=>{
    if(result){
      this.estudianteServiceService.deleteEstudiante(id).subscribe((msg)=>{
        this.router.navigateByUrl('/festudiante', {skipLocationChange: true}).then(()=>
        {
          this.router.navigate(['/festudiante'])
          
        }); 
  
      })
    }
  })
}

editar:any;

  async tomarEstudiante(code){
    const editarDialog = this.dialog.open(EditarestudianteComponent,{
      width:'1000px',
      height:'700px',
      data:{info:this.info}
    })

    
   await editarDialog.afterClosed().subscribe((msg)=>{
     if(msg){
      this.router.navigateByUrl('/festudiante', {skipLocationChange: true}).then(()=>{
        this.router.navigate(['/festudiante'])
  
       })
     }
   })

    /* this.estudianteServiceService.getEstudiante(code).subscribe((estudiante:any)=>{
      delete(estudiante._id)
      delete(estudiante.__v)
      this.EstudianteForm.setValue(estudiante)
    }) */
  }



  async Informacion(){
    const infoDialog = this.dialog.open(InfoestudianteComponent,{
      width:'1000px',
      height:'700px',
      data:{info:this.info}
    })
    await infoDialog.afterClosed().subscribe((msg)=>{
      if(msg){
        this.router.navigateByUrl('/festudiante', {skipLocationChange: true}).then(()=>{
          this.router.navigate(['/festudiante'])
    
         })
      }
    })

  }








/*   updateEstudiante(){
    this.estudianteServiceService.updateEstudiante(this.EstudianteForm.value).subscribe((estudiante:any)=>{
      this.router.navigateByUrl('/festudiante',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['/festudiante'])
      });
    })
  } */




}
