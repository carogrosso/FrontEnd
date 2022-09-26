import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = []
  
  userLogged=this.authService.getUserLogged();
  showAddPro: boolean=false;
  subscription?: Subscription;
  titulo: string = null;
  descripcion: string = null;
  link: string = null;
  imagen: string = null;

  constructor(
    private proyectoService: ProyectoService,
    private authService:AuthService,
    private router:Router
  ) { 
    this.subscription = this.proyectoService.onToggle().subscribe(value =>
      this.showAddPro = value);
  }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data=>{
      this.proyectos = data;
    });
  }

  onCreate(f:any): void {
    const pro = new Proyecto(this.titulo, this.descripcion, this.link, this.imagen);
    this.proyectoService.save(pro).subscribe(
      data => {
        this.ngOnInit();
        this.toggleAddPro();
        Swal.fire({
          title: 'Listo!',
          text: 'Proyecto agregado',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['']);
        f.reset();
      }, err => {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo agregar el proyecto. Todos los campos son obligatorios',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        })
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(
        data => {
          this.ngOnInit();
          Swal.fire({
            title: 'Listo!',
            text: 'Proyecto eliminado',
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

  toggleAddPro() {
    this.proyectoService.toggleAddPro();;
  }

}
