import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router:Router) { }
  links=[]

  //corregir servicio
  admin = true  //this.loginService.admin 


  ngOnInit() {
    /* if(this.logincomponent.login){
      this.links=[
        {url:'/estudiante',nombre:'Estudiante'},
        {url:'/carrera',nombre:'Carrera'},
        {url:'/festudiante',nombre:'Festudiante'},
      ]
    }else{
      this.links=[
        {url:'/login',nombre:'Login'},
      ] */
    }


    cerrar(){
       localStorage.removeItem('usuario');
      this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>{
        this.router.navigate(['/login'])
  
       })
 }

 iniciar(){
  this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>{
    this.router.navigate(['/login'])

   })
 }


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
