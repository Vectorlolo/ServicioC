import { Component, OnInit,Inject} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../constancia/constancia.component'
import { Router } from '@angular/router';


@Component({
  selector: 'app-editardialog',
  templateUrl: './editardialog.component.html',
  styleUrls: ['./editardialog.component.css']
})
export class EditardialogComponent implements OnInit {

  constructor(
    private router:Router,
    public editarDialog:MatDialogRef<EditardialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

  ) { }




  Aceptar(){
    this.editarDialog.close(this.data.info)
  }

  Cancelar(){
  
    this.editarDialog.close(false)
  

  }


  ngOnInit() {
  }

}
