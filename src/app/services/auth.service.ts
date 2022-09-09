import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async register(email:string,password:string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email,password);
    } catch (err) {
      console.log("Error al crear el usuario: ",err);
      return null;
    }
  }

  async login(email:string,password:string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email,password);
    } catch (err) {
      // console.log("Error al iniciar sesion: ",err);
      alert(err);
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
