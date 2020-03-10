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

  usuarios:[]
  ngOnInit() {
  this.loginService.getUsers().subscribe((usuarios:any)=>{
    this.usuarios = usuarios
  })
  }




login:boolean

username: string = '';
password: string = '';

usuario:any

/* UserForm = new FormGroup({
  user: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required])
})

get user(){return this.UserForm.get('user')}
get password(){return this.UserForm.get('password')}
 */



auth(username,password){
  this.userService.authUser(username,password)
}


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
