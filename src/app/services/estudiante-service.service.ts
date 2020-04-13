import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {

  constructor(
    private http:HttpClient
  ) { }
  //Estudiantes
  getProfesores(){
    return this.http.get('http://localhost:3000/api/profesor')
  }

  //Estudiate
  getProfesor(id){
    return this.http.get(`http://localhost:3000/api/profesor/${id}`)
  }

  //Crear
  createProfesor(data){
    return this.http.post('http://localhost:3000/api/profesor/create',data)
  }

  //Actualizar
  updateProfesor(data){
    return this.http.put(`http://localhost:3000/api/profesor/${data.ci_profesor}`,data)
  }

  //Eliminar
  deleteProfesor(id){
    return this.http.delete(`http://localhost:3000/api/profesor/${id}`)
  }

}
