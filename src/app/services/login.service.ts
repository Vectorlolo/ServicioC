import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

getUser(id){
  return this.http.get(`http://localhost:3000/api/usuario/${id}`)
}

getUsers(){
  return this.http.get(`http://localhost:3000/api/usuario`)
}



/* 



  userLog = null;
  nombreUser;
  admin=null;
   adminuser(user){
    let role = {
      role:user.role
    } 
    
    if(role.role == 'admin'){
  
      console.log(role.role)
      this.admin = true
    }else{
      return false
    }
  }
  
  async setUserLog(user){
   
    let info = {
      id: user.ci_coor,
      user: user.usuario,
      nombre_coor: `${user.nom_coor} ${user.ape_coor}`
    }
    this.nombreUser = await info.nombre_coor
    await localStorage.setItem('userLogged',JSON.stringify(info))
    
    this.getUserLog()
  }
  
  async getUserLog(){
     this.userLog = await JSON.parse(localStorage.getItem('userLogged'))
     this.nombreUser = this.userLog.nombre_coor
     this.userService.setUserConected(this.userLog.id)
  
  }
  
  async clearUserLog(){
    this.userLog = null;
    await localStorage.clear()
  }
  



  constructor(private userService:UserService) { } */

  /* LoginService(user){
    return this.http.post(`http://localhost:3000/api/usuario`,user)
  } */
  
}

