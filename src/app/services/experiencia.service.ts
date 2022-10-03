import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  // private url = 'http://localhost:8080/experiencia';
  private url = 'https://carogrosso-portfolio.herokuapp.com/experiencia';
  private showAddExp: boolean=false;
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url+'/lista');
  }
  public save(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(this.url+'/crear',experiencia);
  }
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  }
  public detail(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + `/detail/${id}`);
  } 
  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.url + `/update/${id}`, experiencia);
  }

  toggleAddExp(): void {
    this.showAddExp = !this.showAddExp;
    this.subject.next(this.showAddExp);
  }

  onToggleNew():Observable<any> {
    return this.subject.asObservable();
  }
  
}