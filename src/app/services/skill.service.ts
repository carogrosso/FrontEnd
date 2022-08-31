import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private url = 'http://localhost:8080/skill'
  private showAddSkill: boolean=false;
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url+'/lista');
  }
  public save(skill:Skill): Observable<Skill>{
    return this.http.post<Skill>(this.url+'/crear',skill);
  }
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  }


  toggleAddSkill(): void {
    this.showAddSkill = !this.showAddSkill;
    this.subject.next(this.showAddSkill);
  }

  onToggle():Observable<any> {
    return this.subject.asObservable();
  }

}
