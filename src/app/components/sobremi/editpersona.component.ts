import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editpersona',
  templateUrl: './editpersona.component.html',
  styleUrls: ['./editpersona.component.css']
})
export class EditpersonaComponent implements OnInit {
  perso: Persona = null; 

  constructor(private personaService: PersonaService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.perso = data;
        alert(this.perso);
      }, err =>{
        alert("Error al mostrar la persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.perso).subscribe(
      data => {
        this.router.navigate(['']);
        // this.ngOnInit();
      }, err =>{
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }

}
