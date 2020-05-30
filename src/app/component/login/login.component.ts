import { Component, OnInit,Output } from '@angular/core';
import {LoginService} from '../../services/login.service'
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service'
import {FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,
     private router:Router,
     private userService:UserService) { }

  ngOnInit() {
 
  }


mal=false
 singIn(){
  this.usuario = {user:this.username,password:this.password} 

 // console.log(this.usuario)
  this.userService.singin(this.usuario)
  .subscribe(
    res=>{
       localStorage.setItem('token',res.jwt)
      console.log(res)
      this.router.navigateByUrl('/inicio', {skipLocationChange: true}).then(()=>{
        this.router.navigate(['/inicio'])
       })

      },
    err=> {
      console.log(err) 
      this.mal=true
    }

  )
}


login:boolean

username: string = '';
password: string = '';

usuario

/* UserForm = new FormGroup({
  user: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required])
})

get user(){return this.UserForm.get('user')}
get password(){return this.UserForm.get('password')}
 */





/*  authUser(user,password){
  this.loginService.getUser(user).subscribe((usuario:any)=>{
    if(usuario.password === password){
      this.login = true
    }else{
      this.login = false
    }
  })
} */


  /* logIn(username:any, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.LoginService(username).subscribe(

      res => {
       console.log(res);
       let u: User = {username};        
        this.userService.setUserLoggedIn(u);


      },
      error => {
        console.error(error);
        
      },

      () => this.navigate()
    );

  }

  navigate() {
    this.router.navigateByUrl('/festudiante');
  }
 */

}
