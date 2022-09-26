import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/services/estudio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editestudio',
  templateUrl: './editestudio.component.html',
  styleUrls: ['./editestudio.component.css']
})
export class EditestudioComponent implements OnInit {
  estu : Estudio = null;

  constructor(private estudioService: EstudioService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudioService.detail(id).subscribe(
      data => {
        this.estu = data;
      }, err =>{
        alert("Error al mostrar el estudio");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudioService.update(id, this.estu).subscribe(
      data => {
        this.router.navigate(['']);
        Swal.fire({
          title: 'Listo!',
          text: 'Estudio modificado',
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
