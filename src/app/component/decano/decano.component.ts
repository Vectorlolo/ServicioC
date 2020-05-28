import { Component, OnInit,ViewChild} from '@angular/core';
import {FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource, throwToolbarMixedModesError ,MAT_DIALOG_DATA, MatDialog, MatTextareaAutosize } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { DecanoService } from '../../services/decano.service'
//bitacora
import { BitacoraService } from '../../services/bitacora.service'

@Component({
  selector: 'app-decano',
  templateUrl: './decano.component.html',
  styleUrls: ['./decano.component.css']
})
export class DecanoComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private formbuilder: FormBuilder,
//bitacora
private bitacoraService:BitacoraService,
private decanoService:DecanoService
  ) { }


  //bitacora
usuarioOK
  ngOnInit() {
     //bitacora
     this.usuarioOK = JSON.parse(localStorage.getItem('usuario'));

     this.decanoService.getDecanos().subscribe((decano:any)=>{
      delete(decano.__v)
      delete(decano._id)

      this.Decano = decano[0]


      this.decanoForm.setValue(this.Decano)
      this.dataSource = new MatTableDataSource(decano);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     })



  }

  displayedColumns: string[] = ['nombramiento','fecha','nombre','apellido','rango' ];
  dataSource

Decano

ini
fechA
Dia(){
  this.ini = this.decanoForm.value.fecha
  
  this.fechA = (this.ini.getMonth()+1)  +'/'+this.ini.getDate()+'/'+this.ini.getFullYear()


  this.decanoForm.value.fecha = this.fechA

}

  decanoForm = new FormGroup({
       _id: new FormControl({disabled:true}),
       __v:new FormControl({disabled:true}),
       nombramiento:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{1,4}$')]),//{1,8}$
       fecha:new FormControl('',[Validators.required]),
       nombre: new FormControl('',[Validators.required]),
       apellido:new FormControl('',[Validators.required]),
       rango:new FormControl('',[Validators.required])

     })

     get nombramiento() { return this.decanoForm.get('nombramiento') }
     get fecha() { return this.decanoForm.get('fecha') }
     get nombre() { return this.decanoForm.get('nombre') }
     get apellido() { return this.decanoForm.get('apellido') }
     get rango() { return this.decanoForm.get('rango') }


  minDate = new Date(2007, 0, 1);//para el datapiker


editarDecano(){
  this.Dia()
  console.log(this.Decano._id)
  this.decanoService.editDecano(this.decanoForm.value,this.Decano._id).subscribe((deca:any)=>{
    console.log(this.decanoForm.value)
    this.BitacoraEdita()

    this.decanoService.getDecanos().subscribe((decano:any)=>{
      delete(decano.__v)
      delete(decano._id)

      this.Decano = decano[0]

      this.decanoForm.setValue(this.Decano)
      this.dataSource = new MatTableDataSource(decano);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     })
  })
}



//Bitacora
bitaco

bitacoraForm = new FormGroup({
  usuario: new FormControl('',[Validators.required]),
  accion: new FormControl('',[Validators.required]),
  fecha: new FormControl('',[Validators.required]),
})

BitacoraEdita(){
  this.bitacoraForm.value.usuario = this.usuarioOK.user
  this.bitacoraForm.value.accion = 'Edito Decano: ' + this.Decano.nombre
  this.bitacoraService.createBitacora(this.bitacoraForm.value).subscribe((bitacora)=>{
    console.log(bitacora)
  })
}



}
