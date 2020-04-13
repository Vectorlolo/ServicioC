import { Component, OnInit,Inject } from '@angular/core';
import { MateriaService } from '../../services/materia.service';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material';
import {DialogData} from '../materia/materia.component'
import { CarreraService } from '../../services/carrera.service';
@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css']
})
export class EditarMateriaComponent implements OnInit {

  constructor(
    private materiasService:MateriaService,
    private carrerasService:CarreraService,
    public editarMateria:MatDialogRef<EditarMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

    carreras:any
  ngOnInit() {

    this.materiasService.getMateria(this.data.info).subscribe((materia:any)=>{
      delete(materia.__v)
      delete(materia._id)
      this.materiasForm.setValue(materia)
    })
    this.carrerasService.getCarreras() 
    .subscribe( carrera =>  this.carreras = carrera)
  }


  materiasForm  = new FormGroup({
    codigo_materia: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.pattern('^[A-Z]{3}\-[0-9]{5}$')]),
    nombre_mat: new FormControl('',[Validators.required]),
    horas_teo: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
    horas_pra: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
    horas_lab: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
    carrera: new FormControl('',[Validators.required]),
    estado: new FormControl({value:true,disabled:true})
  });

  get codigo_materia() {return this.materiasForm.get('codigo_materia')}
  get nombre_mat() {return this.materiasForm.get('nombre_mat')}
  get horas_teo() {return this.materiasForm.get('horas_teo')}
  get horas_pra() {return this.materiasForm.get('horas_pra')}
  get horas_lab() {return this.materiasForm.get('horas_lab')}
  get carrera() {return this.materiasForm.get('carrera')}




  Aceptar(){
    this.materiasService.updateMateria(this.materiasForm.value).subscribe((materia)=>{
   console.log(materia)
   })
   this.editarMateria.close(true)
 }

 Cancelar(){
   this.editarMateria.close(false)
 }




}
