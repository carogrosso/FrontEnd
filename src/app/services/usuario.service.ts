import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  // userLogged: boolean = false;
  
  // userLoggedObservable = 1;
  
  // private url = 'http://localhost:8080/usuario';
  private url = 'https://carogrosso-portfolio.herokuapp.com/usuario';

  constructor(private http: HttpClient) { }

  // public save(usuario:Usuario): Observable<Usuario>{
  //   return this.http.post<Usuario>(this.url+'/crear',usuario);
  // }

  public login(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.url+'/login',usuario);
    let maildelusuario:String= usuario.email; 
  }

  public getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url+'/traer');
  }

  public getUsuarioMail():Observable<any>{
    return this.http.get(this.url+'/traermaildeusuario');
  }
  
  // getUserLogged(){
  //   return this.login(this);
  // }


  // setUserLogged(valor:boolean){
  //   this.userLogged;
  // }
}
