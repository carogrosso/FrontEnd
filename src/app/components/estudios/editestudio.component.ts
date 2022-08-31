import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/services/estudio.service';

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
        alert(this.estu);
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
        // this.ngOnInit();
      }, err =>{
        alert("Error al modificar el estudio");
        this.router.navigate(['']);
      }
    )
  }
}
