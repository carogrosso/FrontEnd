import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // mailDeUsuario= this.usuarioService.getUsuarioMail();
  // usuarioAdmin: Usuario = new Usuario ("","","grossoc@admin.com","administrador");
  // usuario: Usuario = new Usuario("","","","");
  // userLogged=false;

  // userLogged=this.usuarioService.login(this.usuario);

// ESTO NECESITO PARA LOG CON FIREBASE

isLogged:boolean=true
userLogged=this.authService.getUserLogged();
usuario = {
    mail: '',
    password: ''
}
// ESTO NECESITO PARA LOG CON FIREBASE

  constructor(
    private usuarioService: UsuarioService,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  // getUserLogged(){
  //   return this.usuarioService.login(this.usuario);
  // }

  // ingresar(){
  //   // this.usuario.mail = formlogin.value.mail;
  //   // this.usuario.password = formlogin.value.password;
  //   console.log(this.usuario.mail);
  //   console.log(this.usuario.password);
  //   // console.log(this.usuarioService);
  //   // console.log(this.getUserLogged());

  //   // if (this.usuarioService.getUsuarioMail() == this.usuario.mail){
  //   //   console.log(this.usuarioService.getUsuarioMail());
  //   //   console.log("el usuario es el mismo"+ this.usuarioService.getUsuarioMail())
  //   //   this.router.navigateByUrl('');
  //   // } else {
  //   //   alert("El usuario y/o contraseña son incorrectos.");
  //     // console.log("el usuario no es el mismo "+ this.usuario.mail);
  //     this.usuarioService.getUsuarioMail().subscribe(data =>
  //       {console.log(data);
  //       });
  //   }

  //   console.log(this.getUserLogged());
  //   this.usuarioService.login(this.usuario).subscribe(data => 
  //     { console.log(data);
  //       // this.userLogged=data;
  //       // console.log(this.userLogged);
  //       // this.usuarioService.setUserLogged(data);
  //       // console.log(this.usuarioService.getUserLogged());
  //     });
  //     this.router.navigateByUrl('');
  // }



// ESTO NECESITO PARA LOG CON FIREBASE

onSwitch(){
  this.isLogged=!this.isLogged;
}

  Ingresar(){
    const { mail,password } =this.usuario
    if (this.isLogged){
      this.authService.login(mail,password).then(res=>{
        console.log("Ingresaste ", res);
        this.router.navigateByUrl('');
      })
    } else {
this.authService.register(mail,password).then(res=>{
      console.log("Se registro el usuario correctamente: ", res);
    })
    }
    // console.log(this.usuario);
    // this.router.navigateByUrl('');
  }

  IngresarConGoogle(){
    const { mail,password } =this.usuario
    this.authService.loginWithGoogle(mail,password).then(res=>{
      console.log("Se registro el usuario correctamente: ", res);
    })
    this.router.navigateByUrl('');
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
