import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServicioC';
  links = [];

  ngOnInit(){
    this.links=[
      {url:'/estudiante',nombre:'Estudiante'},
      {url:'/carrera',nombre:'Carrera'},
      {url:'/festudiante',nombre:'Festudiante'},
    ]
  }


}
