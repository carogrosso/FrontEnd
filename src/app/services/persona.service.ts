import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //url = 'http://localhost:8080/persona';
  url = 'https://carogrosso-portfolio.herokuapp.com/persona';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.url+'/traer');
  }
  public save(persona:Persona): Observable<Persona>{
    return this.http.post<Persona>(this.url+'/crear',persona);
  }
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  } 
  public detail(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.url + `/detail/${id}`);
  } 
  public update(id: number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.url + `/update/${id}`, persona);
  }
}
