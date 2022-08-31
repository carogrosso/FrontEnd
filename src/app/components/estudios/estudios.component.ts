import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/services/estudio.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  anoEgreso: number = 0;
  
  constructor(
    private estudioService: EstudioService,
    private authService:AuthService,
    private router:Router,
    private activatedRouter: ActivatedRoute
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
          alert("Estudio añadido");
          this.router.navigate(['']);
          f.reset();
        }, err => {
          alert("No se pudo agregar el estudio");
        }
      )
    }
  
    delete(id?: number){
      if(id != undefined){
        this.estudioService.delete(id).subscribe(
          data => {
            this.ngOnInit();
          }, err => {
            alert("No se pudo borrar el estudio");
          }
        )
      }
    }
  
    toggleAddEst() {
      this.estudioService.toggleAddEst();;
    }

}
