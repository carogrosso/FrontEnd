import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          title: 'Listo!',
          text: 'La persona fue modificada',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        })
        // this.ngOnInit();
      }, err =>{
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        this.router.navigate(['']);
      }
    )
  }

}
