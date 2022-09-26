import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private url = 'http://localhost:8080/proyecto'
  private showAddPro: boolean=false;
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url+'/lista');
  }
  public save(proyecto:Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(this.url+'/crear',proyecto);
  }
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  }


  toggleAddPro(): void {
    this.showAddPro = !this.showAddPro;
    this.subject.next(this.showAddPro);
  }

  onToggle():Observable<any> {
    return this.subject.asObservable();
  }
  
}
