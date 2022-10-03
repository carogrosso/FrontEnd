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

  logOut(){
    this.authService.logOut()
  }

}
