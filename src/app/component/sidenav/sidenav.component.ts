import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  links=[]

  //corregir servicio
  admin = true  //this.loginService.admin 


  ngOnInit() {
/* 
    console.log(this.admin)
    if(this.admin == true){
      this.links=[
        {url:'/usuarios',nombre:'Usuarios'},
        {url:'/carreras',nombre:'Carreras'},
        
      ]
    }else{
 this.links = [
    {url:'/horario',nombre:'Horario'},
    {url:'/profesores',nombre:'Profesores'},
    {url: '/materias',nombre:'materias'},
    {url:'/aula',nombre:'Aulas'},
    {url: '/logout',nombre:'Cerrar sesión'}
    
  ]
  

    } */
    
  }

}
