import { Component, OnInit,Inject } from '@angular/core';
import { PeriodoService } from '../../services/periodo.service';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material';
import {DialogData} from '../materia/materia.component'

@Component({
  selector: 'app-editar-periodo',
  templateUrl: './editar-periodo.component.html',
  styleUrls: ['./editar-periodo.component.css']
})
export class EditarPeriodoComponent implements OnInit {

  constructor(
    private periodoService:PeriodoService,
    public editarPeriodo:MatDialogRef<EditarPeriodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  ngOnInit() {
    this.periodoService.getPeriodo(this.data.info).subscribe((periodo:any)=>{
      delete(periodo.__v)

      this.periodosForm.setValue(periodo)
    })
  }
  minDate = new Date(2007, 0, 1);//para el datapiker
  
 
  periodosForm = new FormGroup({
       _id: new FormControl({value:this.data.info,disabled:true}),
       periodo:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{3}$')]),
       inicio:new FormControl('',[Validators.required]),
       final: new FormControl('',[Validators.required]),
       estado: new FormControl({value:true,disabled:true})

     })

        // id:any
   // form:any
    get periodo() { return this.periodosForm.get('periodo') }
    get inicio() { return this.periodosForm.get('inicio') }
    get final() { return this.periodosForm.get('final') }



    inicio2:string
    inicio3:string

    final2:string
    final3:string

    Aceptar(){
      this.inicio2 =this.periodosForm.value.inicio
      this.final2 = this.periodosForm.value.final
      /* this.inicio3= this.inicio2.substring(0, 10)
      this.final3= this.final2.substring(0, 10) */
      console.log(this.inicio2)
      console.log(this.final2)

     // this.periodosForm.value.inicio = this.inicio2
   //   this.periodosForm.value.final = this.final2

      this.periodoService.updatePeriodo(this.periodosForm.value,this.data.info).subscribe((periodo)=>{
     console.log(periodo)
     })
     this.editarPeriodo.close(true)
   }
  
   Cancelar(){
     this.editarPeriodo.close(false)
   }
  
}
