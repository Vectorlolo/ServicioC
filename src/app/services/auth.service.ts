import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private URL = 'http://localhost:3000/api/'
  constructor(private http:HttpClient,
    private router:Router
    ) { }
//puedes poner esto en el user service?
singup(user){
 return this.http.post<any>(this.URL+'/singin',user)
}

}
