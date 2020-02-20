import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-borrardialog',
  templateUrl: './borrardialog.component.html',
  styleUrls: ['./borrardialog.component.css']
})
export class BorrardialogComponent implements OnInit {

  constructor(
  public borrarDialog:MatDialogRef<BorrardialogComponent>  ) { }





Aceptar(){
      this.borrarDialog.close(true)
    }

    Cancelar(){
    
      this.borrarDialog.close(false)
    }



  ngOnInit() {
  }

}
