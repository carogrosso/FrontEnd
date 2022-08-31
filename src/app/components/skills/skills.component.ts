import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

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
  skill: string = '';
  porcentaje: number = 0;
  color: string = '';

  constructor(
    private skillService: SkillService,
    private authService:AuthService,
    private router:Router,
    private activatedRouter: ActivatedRoute
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
        alert("Skill añadida");
        this.router.navigate(['']);
        f.reset();
      }, err => {
        alert("No se pudo agregar la skill");
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.ngOnInit();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }

  toggleAddSkill() {
    this.skillService.toggleAddSkill();;
  }

}
