import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http:HttpClient) { }

getMaterias(){
  return this.http.get('http://localhost:3000/api/materia');
}

getMateria(id){
  return this.http.get(`http://localhost:3000/api/materia/${id}`)
}

createMateria(data){
  return this.http.post('http://localhost:3000/api/materia/create',data)
}

updateMateria(data){
  return this.http.put(`http://localhost:3000/api/materia/${data.codigo_materia}`,data)
}

deleteMateria(id){
  return this.http.delete(`http://localhost:3000/api/materia/${id}`)
}

/* getMateriasCarreras(){
  return this.http.get(`http://localhost:3000/api/materia/puta`);//esta es por si no sirve
} */


}
