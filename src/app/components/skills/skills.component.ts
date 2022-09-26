import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills : Skill[] = []

  userLogged=this.authService.getUserLogged();
  showAddSkill: boolean=false;
  subscription?: Subscription;
  skill: string = null;
  porcentaje: number = null;
  color: string = null;

  constructor(
    private skillService: SkillService,
    private authService:AuthService,
    private router:Router
  ) { 
    this.subscription = this.skillService.onToggle().subscribe(value =>
      this.showAddSkill = value);
  }

  ngOnInit(): void {
  this.skillService.getSkill().subscribe(data=>{
    this.skills = data;
  });
  }

  onCreate(f:any): void {
    const skill = new Skill(this.skill, this.porcentaje, this.color);
    this.skillService.save(skill).subscribe(
      data => {
        this.ngOnInit();
        this.toggleAddSkill();
        Swal.fire({
          title: 'Listo!',
          text: 'Skill agregada',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['']);
        f.reset();
      }, err => {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo agregar la habilidad. Todos los campos son obligatorios',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.ngOnInit();
          Swal.fire({
            title: 'Listo!',
            text: 'Skill eliminada',
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

  toggleAddSkill() {
    this.skillService.toggleAddSkill();;
  }

}
