import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {

// isLogged:boolean=true
// userLogged=this.authService.getUserLogged();
usuario = {
  email: "",
  password: ""
}

  constructor(
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }


  altaUsuario(){
    const { email,password } =this.usuario
    this.authService.register(email,password).then(res=>{
      console.log("Se registro el usuario correctamente: ", res);
    })
    this.router.navigateByUrl('login');
    }

}
