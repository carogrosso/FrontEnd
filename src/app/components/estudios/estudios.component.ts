import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/services/estudio.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: Estudio[] = []

  userLogged=this.authService.getUserLogged();
  showAddEst: boolean=false;
  subscription?: Subscription;
  titulo: string = null;
  institucion: string = null;
  anoEgreso: number = null;
  
  constructor(
    private estudioService: EstudioService,
    private authService:AuthService,
    private router:Router
  ) { 
    this.subscription = this.estudioService.onToggle().subscribe(value =>
      this.showAddEst = value);
  }

  ngOnInit(): void {
    this.estudioService.getEstudio().subscribe(data=>{
      this.estudios = data;
    });
    }
  
  onCreate(f:any): void {
    const est = new Estudio(this.titulo, this.institucion, this.anoEgreso);
    this.estudioService.save(est).subscribe(
      data => {
        this.ngOnInit();
        this.toggleAddEst();
        Swal.fire({
          title: 'Listo!',
          text: 'Estudio agregado',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['']);
        f.reset();
      }, err => {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo agregar el estudio. Todos los campos son obligatorios',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        })
      }
    )
  }
  
  delete(id?: number){
    if(id != undefined){
      this.estudioService.delete(id).subscribe(
        data => {
          this.ngOnInit();
          Swal.fire({
            title: 'Listo!',
            text: 'Estudio eliminado',
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

  toggleAddEst() {
    this.estudioService.toggleAddEst();;
  }

}
