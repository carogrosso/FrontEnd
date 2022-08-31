import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { AuthService } from 'src/app/services/auth.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  persona: Persona = new Persona("","","","","")
  // userLogged=this.authService.getUserLogged();
  userLogged=false;

  constructor(
    public personaService: PersonaService,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{
      this.persona = data;
    })
  }

}