import { Component, OnInit,ViewChild } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CarreraService } from '../../services/carrera.service';
import { MatTableDataSource, throwToolbarMixedModesError, MatDialog } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatDialogRef } from '@angular/material'; //revisar si sirve
import { BorrardialogComponent } from '../borrardialog/borrardialog.component'
import { EditarcarreraComponent } from '../editarcarrera/editarcarrera.component';

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

 displayedColumns: string[] = ['carrera','boton','botonE'];
  dataSource


 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  CarreraForm = new FormGroup({
    carrera : new FormControl('', [Validators.required])
  })

  get carrera() {return this.CarreraForm.get('carrera')}



  crearCarrera(){
     this.carreracervice.createCarrera(this.CarreraForm.value).subscribe((carrera)=>{
    console.log(carrera)
      this.router.navigateByUrl('/carrera',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['/carrera'])
      });
    })
  }

  
CarreraEForm = new FormGroup({
    carrera : new FormControl('', [Validators.required])
  })

  get carreraE() {return this.CarreraForm.get('carrera')}


async editarCarrera(id){
 const editarDialog = this.dialog.open(EditarcarreraComponent,{
  width: '600px',
  height: '280px'
 })

await editarDialog.afterClosed().subscribe((result)=>{
  
 if(result){

 this.carreracervice.deleteCarrera(id).subscribe((msg)=>{
      this.router.navigateByUrl('/carrera', {skipLocationChange: true}).then(()=>
      {
        this.router.navigate(['/carrera'])
      });
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

  console.log(id);

  await borrarDialog.afterClosed().subscribe((result)=>{
    console.log(result)
    if(result){
       this.carreracervice.deleteCarrera(id).subscribe((msg)=>{
         this.router.navigateByUrl('/carrera', {skipLocationChange: true}).then(()=>
      {
        this.router.navigate(['/carrera'])
        
      }); 

       })

      
    }
  })

 }
  



}
