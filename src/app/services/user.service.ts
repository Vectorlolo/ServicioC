import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {LoginService} from './login.service'
import { Router } from '@angular/router';

export interface User {
  usuario: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ,private loginService:LoginService ,private router:Router) {   }


elman:boolean

  authUser(user,password){


    this.loginService.getUser(user).subscribe((usuario:any)=>{
      if(usuario.password === password){
        
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.router.navigateByUrl('/inicio', {skipLocationChange: true}).then(()=>{
          this.router.navigate(['/inicio'])
          return true
         })
      }else{
        console.log('contraseña erronea')
        return false
      }
    })
  }
  datoUsuario:any
  auth(){
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    if(this.datoUsuario != null ||this.datoUsuario != ''||this.datoUsuario != undefined){
      this.elman = true
    }else{
      this.elman = false
    }
  }
  
/* 

  usuarios = [{
      user:'Admin',
      password:'Admin',
      question:'Admin',
      answer:'Admin',
      role:'ADMIN_ROLE'
    }
]

preguntas_seguridad = [
  {
    user:'Admin',
    pregunta_uno:'¿Eres Admin?',
    respuesta_uno:'Admin',
    pregunta_dos:'¿Eres Admin 2?',
    respuesta_dos:'Admin'
  }
]




  userConected;

async UsuarioExiste(usuario){
  let usuarioExist = await this.usuarios.filter((user)=>{
    return user.user = usuario;
  })

  if (usuarioExist.length > 0){
    return true
  }else {return false}
}

usuarioExisteApi(usuario:string){
  return this.http.post<User>('http://localhost:3000/usuario',{usuario:usuario});
}

async getPreguntas(user){
  let preguntas = await this.preguntas_seguridad.filter((pregunta)=>{
    return pregunta.user == user;
  })
  if(preguntas.length>0){
    return preguntas[0]
  }else{
    return false
  }
  
}

async verficarPreguntas(respuestas){
    let preguntas = await this.preguntas_seguridad.filter((user)=>{
      return (user.user == respuestas.usuario ) && (user.respuesta_uno == respuestas.respuesta_uno) && (user.respuesta_dos == respuestas.respuesta_dos)
    })
    if (preguntas.length > 0){
      return true
    }else {
      return false
    }
}

getUsuarios(){
  return this.usuarios;
}

setUsuario(newUser){
  this.usuarios.push(newUser)
}

getUsuario(id){
  return this.usuarios.filter((usuario)=>{
    return usuario.user == id
  })[0]
}

setUserConected(id){
  this.userConected = this.getUsuario(id)
}

authUsuario(usuario,password){
  return this.http.post('http://localhost:3000/api/usuario/auth',{usuario:usuario,password:password});

}

cambiarPassword(id){

}

SetUsuario(data){
  return this.http.post('http://localhost:3000/api/usuario/create',data)
}
GetUsuarios(){
  return this.http.get('http://localhost:3000/api/usuario')
}
deleteUsuarios(data){
  return this.http.delete(`http://localhost:3000/api/usuario/${data.ci_coor}`,data)
}


 */

}
