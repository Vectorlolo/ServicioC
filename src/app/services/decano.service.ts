import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DecanoService {

  constructor(private http:HttpClient) { }

getDecanos(){
  return this.http.get('http://localhost:3000/api/decano')
}

editDecano(data,id){
  return this.http.put(`http://localhost:3000/api/decano/${id}`,data)
}

createDecano(data){
  return this.http.post(`http://localhost:3000/api/decano/create`,data)
}


}
