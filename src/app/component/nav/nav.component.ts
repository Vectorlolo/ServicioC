import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  links=[]
  datoUsuario:any
  esfalse=false

  ngOnInit(){
this.links=[
    {url:'/inicio',nombre:'inicio'},
    {url:'/carrera',nombre:'Carrera'},
    {url:'/festudiante',nombre:'Profesor'},
    {url:'/materia',nombre:'Materia'},
    {url:'/periodo',nombre:'Periodo'},
    {url:'/constancia',nombre:'Constancia'},
    {url:'/bitacora',nombre:'Bitacora'},
    {url:'/decano',nombre:'Decano'}
    
  ]

  this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));

if(this.datoUsuario == null ||this.datoUsuario == undefined  ||this.datoUsuario == ''){
 this.esfalse=false
}else{
  this.esfalse=true

}

  }

 
  
  cerrar(){
    localStorage.removeItem('usuario');
   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
     this.router.navigate(['/'])

    })
}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router:Router) {}

}
