import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  constructor(private http:HttpClient) { }

  getPeridos(){
    return this.http.get('http://localhost:3000/api/periodo');
  }

  getPeriodo(id){
    return this.http.get(`http://localhost:3000/api/periodo/${id}`)
  }
  
  createPeriodo(data){
    return this.http.post('http://localhost:3000/api/periodo/create',data)
  }

  updatePeriodo(data,id){
    return this.http.put(`http://localhost:3000/api/periodo/${id}`,data)
  }

  deletePerido(id){
    return this.http.delete(`http://localhost:3000/api/periodo/${id}`)
  }
}

