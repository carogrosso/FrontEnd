import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  titulo: string = '';
  descripcion: string = '';
  link: string = '';
  imagen: string = '';

  constructor(
    private proyectoService: ProyectoService,
    private authService:AuthService,
    private router:Router,
    private activatedRouter: ActivatedRoute
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
        alert("Proyecto añadido");
        this.router.navigate(['']);
        f.reset();
      }, err => {
        alert("No se pudo agregar el proyecto");
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(
        data => {
          this.ngOnInit();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }

  toggleAddPro() {
    this.proyectoService.toggleAddPro();;
  }

}
