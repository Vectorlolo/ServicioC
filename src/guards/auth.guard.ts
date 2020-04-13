import { Injectable ,OnInit} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../app/services/user.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , OnInit{
  constructor(private userService:UserService, private router:Router){ }
/*   canActivate(){
    if(this.userService.authUser){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  } */
  ngOnInit(){
    this.auth()
  }
  elman:boolean
  datoUsuario:any
   auth(){
     this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
     if(this.datoUsuario.role == 'ADMIN_ROLE' ){//el esta reconociendo el datousuario como objeto , tienes 
        //que decirle que es un objeto para que no de false
      return true
    }else{
      return false
    }
  }
  canActivate(

    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

 

      if (!this.auth()) {

        console.log(this.datoUsuario.user + 'no hay usuario, false')
        this.router.navigate(['login']);

        return false;

      }
      console.log(this.datoUsuario.user + 'hay usuario, true')

      return true ;

  }

}

