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
      this.i = periodo.inicio
      this.f = periodo.final
      console.log(this.periodosForm)
    })
  }
  minDate = new Date(2007, 0, 1);//para el datapiker
  

i
f

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }


 
  periodosForm = new FormGroup({
       _id: new FormControl({value:this.data.info,disabled:true}),
       periodo:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{3}$')]),
       inicio:new FormControl('',[Validators.required]),
       final: new FormControl('',[Validators.required]),
       semana:new FormControl('')
     })

        // id:any
   // form:any
    get periodo() { return this.periodosForm.get('periodo') }
    get inicio() { return this.periodosForm.get('inicio') }
    get final() { return this.periodosForm.get('final') }




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
    Dia(){
      /*    console.log(this.Difference_In_Days)
         console.log(this.semanas)
         console.log(this.diasLaborables) */ 
     
         this.ini = this.periodosForm.value.inicio
       
         this.fecha = this.ini.getMonth()+1  +'/'+this.ini.getDate()+'/'+this.ini.getFullYear()
         this.fechaR = new Date(this.fecha)
     
         this.fin = this.periodosForm.value.final
        
         this.fecha2 = this.fin.getMonth()+1 +'/'+this.fin.getDate() +'/'+this.fin.getFullYear()
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
    inicio2:string
    inicio3:string

    final2:string
    final3:string

    Aceptar(){
    //this.inicio2 =this.periodosForm.value.inicio
     // this.final2 = this.periodosForm.value.final
      /* this.inicio3= this.inicio2.substring(0, 10)
      this.final3= this.final2.substring(0, 10) */
      this.Dia()

     // this.periodosForm.value.inicio = this.inicio2
   //   this.periodosForm.value.final = this.final2

      this.periodoService.updatePeriodo(this.periodosForm.value,this.data.info).subscribe((periodo)=>{
     console.log(this.periodosForm.value)
     })
     this.editarPeriodo.close(true)
   }
  
   Cancelar(){
     this.editarPeriodo.close(false)
   }
  
}
