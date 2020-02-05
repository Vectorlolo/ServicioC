import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http:HttpClient) { }

//Carreras
getCarreras(){
  return this.http.get('http://localhost:3000/api/carrera')
}

//Carrera
getCarrera(id){
  return this.http.get(`http://localhost:3000/api/carrera/${id}`)
}

//Crear
createCarrera(data){
  return this.http.post('http://localhost:3000/api/carrera/create',data)
}

//Actualizar
updateCarrera(data){
  return this.http.put(`http://localhost:3000/api/carrera/${data.carrera}`,data)
}

//Eliminar
deleteCarrera(id){
  return this.http.delete(`http://localhost:3000/api/carrera/${id}`)
}

}