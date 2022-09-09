import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = []
  
  // userLogged=this.usuarioService.getUserLogged();
  userLogged=this.authService.getUserLogged();
  showAddExp: boolean=false;
  subscription?: Subscription;
  empresa: string = null;
  desde: number = 0;
  hasta: number = 0;
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
  // this.userLogged=this.usuarioService.login(this.usuarioService.);
  // console.log(this.userLogged);
  }

    onCreate(f:any): void {
      const expe = new Experiencia(this.empresa, this.desde, this.hasta, this.descripcion);
      this.experienciaService.save(expe).subscribe(
        data => {
          this.ngOnInit();
          this.toggleAddExp();
          alert("Experiencia añadida");
          this.router.navigate(['']);
          f.reset();
        }, err => {
          alert("No se pudo agregar la experiencia. Todos los campos son obligatorios");
        }
      )
    }

  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data => {
          this.ngOnInit();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

  toggleAddExp() {
    this.experienciaService.toggleAddExp();;
  }
}


