import { Injectable } from '@angular/core';
import { HttpInterceptor }  from '@angular/common/http'
import { UserService } from '../services/user.service'
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

 


  constructor(private userService:UserService) { }


   intercept(req,next){
 //   const token: string =  localStorage.getItem('token');
const token =  this.userService.getToken()

  const tokenizeReq =  req.clone({

       setHeaders:{
         Authorization: `Bearer ${token}`
       }
     })
          return next.handle(tokenizeReq)


   
   }


}
