import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { throwToolbarMixedModesError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  constructor(private http:HttpClient) { }


getBitacoras(){
  return this.http.get('http://localhost:3000/api/bitacora');
}

createBitacora(data){
  return this.http.post('http://localhost:3000/api/bitacora/create',data)
}

}
