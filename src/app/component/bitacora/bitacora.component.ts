import { Component, OnInit,ViewChild } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BitacoraService } from '../../services/bitacora.service'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource, throwToolbarMixedModesError ,MAT_DIALOG_DATA, MatDialog, MatTextareaAutosize } from '@angular/material';


@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(
    private bitacoraService:BitacoraService
  ) { }

usuario

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('user'));


    this.bitacoraService.getBitacoras().subscribe((bitacoras:any)=>{
      delete(bitacoras.__v)
      this.dataSource = new MatTableDataSource(bitacoras);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;    })
  }




  displayedColumns: string[] = ['usuario','accion','fecha'];
  dataSource


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
