import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-botones-log',
  templateUrl: './botones-log.component.html',
  styleUrls: ['./botones-log.component.css']
})
export class BotonesLogComponent implements OnInit {

  userLogged=this.authService.getUserLogged();
  
  usuario = {
    email: '',
    password: ''
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  Ingresar(){
    console.log(this.usuario);
    const { email,password } =this.usuario
    this.authService.register(email,password).then(res=>{
      console.log("Se registro el usuario correctamente: ", res);
    })
  }

  IngresarConGoogle(){
    const { email,password } =this.usuario
    this.authService.loginWithGoogle(email,password).then(res=>{
      console.log("Se registro el usuario correctamente: ", res);
    })
  }

  ObtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    })
  }

  logOut(){
    this.authService.logOut()
  }

}
