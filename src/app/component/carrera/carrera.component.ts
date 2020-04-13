import { Component, OnInit,ViewChild } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CarreraService } from '../../services/carrera.service';
import { MatTableDataSource, throwToolbarMixedModesError ,MAT_DIALOG_DATA, MatDialog, MatTextareaAutosize } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatDialogRef } from '@angular/material'; //revisar si sirve
import { BorrardialogComponent } from '../borrardialog/borrardialog.component'
import { EditarcarreraComponent } from '../editarcarrera/editarcarrera.component';

export interface DialogData {
  info:any;
}

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(
    private router:Router,
    public dialog: MatDialog,
    private carreracervice: CarreraService,
    private formbuilder: FormBuilder,

  ) { }



  ngOnInit() {
  this.carreracervice.getCarreras().subscribe((carreras:any)=>{
      delete(carreras.__v)
      this.dataSource = new MatTableDataSource(carreras);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  
  }

 displayedColumns: string[] = ['codigo_c','carrera','turno','boton','botonE'];
  dataSource

  turnos= [{value:"D"},{value:"N"}]

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  CarreraForm = new FormGroup({
    codigo_c: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.pattern('[0-9]{4}$')]),
    carrera : new FormControl('', [Validators.required]),
    turno: new FormControl('',[Validators.required]),
  })

  get codigo_c() {return this.CarreraForm.get('codigo_c')}
  get carrera() {return this.CarreraForm.get('carrera')}
  get turno() {return this.CarreraForm.get('turno')}



  crearCarrera(){
     this.carreracervice.createCarrera(this.CarreraForm.value).subscribe((carrera)=>{
    console.log(carrera)
    this.carreracervice.getCarreras().subscribe((carreras:any)=>{
      delete(carreras.__v)
      this.dataSource = new MatTableDataSource(carreras);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    })
  }

  
CarreraEForm = new FormGroup({
    carrera : new FormControl('', [Validators.required])
  })

  get carreraE() {return this.CarreraForm.get('carrera')}

  info:any;


async editarCarrera(){
 const editarDialog = this.dialog.open(EditarcarreraComponent,{
  width: '600px',
  height: '480px',
  data:{info:this.info}
 })

await editarDialog.afterClosed().subscribe((result)=>{
  
 if(result){

  this.carreracervice.getCarreras().subscribe((carreras:any)=>{
    delete(carreras.__v)
    this.dataSource = new MatTableDataSource(carreras);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
    

      }
      })

       }

      
/* guardarEditado(){
  this.carreracervice.updateCarrera(this.CarreraEForm.value).subscribe((carrera)=>{
    console.log(carrera)
      this.router.navigateByUrl('/carrera',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['/carrera'])
      });
    })
}
 */


 async eliminarCarrera(id){
  const borrarDialog = this.dialog.open(BorrardialogComponent,{
    width: '300px',
    height: '135px'
  })

  

  await borrarDialog.afterClosed().subscribe((result)=>{
    console.log(result )
    if(result){
       this.carreracervice.deleteCarrera(id).subscribe((msg)=>{
        this.carreracervice.getCarreras().subscribe((carreras:any)=>{
          delete(carreras.__v)
          this.dataSource = new MatTableDataSource(carreras);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })

       })

      
    }
  })

 }
  



}
