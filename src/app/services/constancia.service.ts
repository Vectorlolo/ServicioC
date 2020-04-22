import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ConstanciaService {

  constructor(private http:HttpClient) { }
  
  getConstancias(){
    return this.http.get('http://localhost:3000/api/constancia')
  }

  getConstancia(id){
    return this.http.get(`http://localhost:3000/api/constancia/${id}`)
  }

  createConstancia(data){
    return this.http.post('http://localhost:3000/api/constancia/create',data)
  }

  updateConstancia(data){
    return this.http.put(`http://localhost:3000/api/constancia/${data.ci_profesor}`,data)
  }

  deleteConstancia(id){
    return this.http.delete(`http://localhost:3000/api/constancia/${id}`)
  }
}
