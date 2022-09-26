import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private experienciaService: ExperienciaService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err =>{
        alert("Error al mostrar la exp");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
        Swal.fire({
          title: 'Listo!',
          text: 'Experiencia modificada',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        })
      }, err =>{
        Swal.fire({
          title: 'Algo salio mal...',
          text: 'No se pudo modificar',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate(['']);
      }
    )
  }
}

