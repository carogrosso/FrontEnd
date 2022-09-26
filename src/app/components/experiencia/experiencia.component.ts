import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = []
  
  userLogged=this.authService.getUserLogged();
  showAddExp: boolean=false;
  subscription?: Subscription;
  empresa: string = null;
  desde: number = null;
  hasta: number = null;
  descripcion: string = null;

  constructor(
    private experienciaService: ExperienciaService,
    private authService:AuthService,
    private router:Router
  ) { 
    this.subscription = this.experienciaService.onToggleNew().subscribe(value =>
      this.showAddExp = value);
  }

  ngOnInit(): void {
  this.experienciaService.getExperiencia().subscribe(data=>{
    this.experiencias = data;
  });
  }

  onCreate(f:any): void {
    const expe = new Experiencia(this.empresa, this.desde, this.hasta, this.descripcion);
    this.experienciaService.save(expe).subscribe(
      data => {
        this.ngOnInit();
        this.toggleAddExp();
        Swal.fire({
          title: 'Listo!',
          text: 'Experiencia agregada',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['']);
        f.reset();
      }, err => {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo agregar la experiencia. Todos los campos son obligatorios',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data => {
          this.ngOnInit();
          Swal.fire({
            title: 'Listo!',
            text: 'Experiencia eliminada',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          });
        }, err => {
          Swal.fire({
            title: 'Error',
            text: 'No se pudo borrar',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
          });
        }
      )
    }
  }

  toggleAddExp() {
    this.experienciaService.toggleAddExp();;
  }
}


