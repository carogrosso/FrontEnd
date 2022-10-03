import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

isLogged:boolean=true
usuario = {
    email: '',
    password: ''
}

  constructor(
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

onSwitch(){
  this.isLogged=!this.isLogged;
}

  ingresar(){
    const { email,password } = this.usuario
    if (this.isLogged){
      this.authService.login(email,password);
      this.router.navigateByUrl('');
    }
  }

  ingresarConGoogle(){
    const { email,password } = this.usuario
    this.authService.loginWithGoogle(email,password)
    this.router.navigateByUrl('');
  }

}
