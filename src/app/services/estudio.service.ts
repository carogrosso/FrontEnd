import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Estudio } from '../model/estudio.model';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  // private url = 'http://localhost:8080/estudio';
  private url = 'https://carogrosso-portfolio.herokuapp.com/estudio';
  private showAddEst: boolean=false;
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  public getEstudio(): Observable<Estudio[]>{
    return this.http.get<Estudio[]>(this.url+'/lista');
  }
  public save(estudio:Estudio): Observable<Estudio>{
    return this.http.post<Estudio>(this.url+'/crear',estudio);
  }
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  }
  public detail(id: number): Observable<Estudio>{
    return this.http.get<Estudio>(this.url + `/detail/${id}`);
  } 
  public update(id: number, estudio: Estudio): Observable<any>{
    return this.http.put<any>(this.url + `/update/${id}`, estudio);
  }

  toggleAddEst(): void {
    this.showAddEst = !this.showAddEst;
    this.subject.next(this.showAddEst);
  }

  onToggle():Observable<any> {
    return this.subject.asObservable();
  }

}
