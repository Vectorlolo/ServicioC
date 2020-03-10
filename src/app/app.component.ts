import { Component,OnInit } from '@angular/core';
import { UserService} from './services/user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServicioC';
  links = [];
  constructor(private userService:UserService){}

  //login = this.userService.login
  datoUsuario = JSON.parse(localStorage.getItem('usuario'));

opened = false;
  
   ngOnInit(){
    this.links=[
      {url:'/estudiante',nombre:'Estudiante'},
      {url:'/carrera',nombre:'Carrera'},
      {url:'/festudiante',nombre:'Festudiante'},
    ]

    /* console.log(this.login)
    if(this.datoUsuario.role == 'ADMIN_ROLE'){
       this.links=[
        {url:'/estudiante',nombre:'Estudiante'},
        {url:'/carrera',nombre:'Carrera'},
        {url:'/festudiante',nombre:'Festudiante'},
      ]
    }else{
      this.links=[
        {url:'/login',nombre:'Login'},
      ]
    } */
   
  }


}

