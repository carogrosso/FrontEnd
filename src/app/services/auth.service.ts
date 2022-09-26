import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth,
    private router: Router) { }

  async register(email:string,password:string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email,password);
    } catch (err) {
        Swal.fire({
        title: 'Error!',
        text: ''+(err),
        icon: 'error',
        showConfirmButton: false,
      });
      this.router.navigateByUrl('altausuario');
      return null;
    }
  }

  async login(email:string,password:string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email,password);
    } catch (err) {
      Swal.fire({
      title: 'Error!',
      text: ''+(err),
      icon: 'error',
      showConfirmButton: false,
    });
    this.router.navigateByUrl('login');
      return null;
    }
  }

  async loginWithGoogle(email:string,password:string){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("Error al iniciar sesion con Google: ",err);
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState;
  }

  logOut(){
    return this.afauth.signOut();
  }

}
