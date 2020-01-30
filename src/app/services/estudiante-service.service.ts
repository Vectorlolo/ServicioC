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
  getEstudiantes(){
    return this.http.get('http://localhost:3000/api/estudiante')
  }

  //Estudiate
  getEstudiante(id){
    return this.http.get(`http://localhost:3000/api/estudiante/${id}`)
  }

  //Crear
  createEstudiante(data){
    return this.http.post('http://localhost:3000/api/estudiante/create',data)
  }

  //Actualizar
  updateEstudiante(data){
    return this.http.put(`http://localhost:3000/api/estudiante/${data.ci_estudiante}`,data)
  }

  //Eliminar
  deleteEstudiante(id){
    return this.http.delete(`http://localhost:3000/api/estudiante/${id}`)
  }

}
