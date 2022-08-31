export class Curso{
    id?: number;
    curso: String;
    institucion: String;
    horas: String;

    constructor (curso: string, institucion: string, horas: string){
        this.curso = curso;
        this.institucion = institucion;
        this.horas = horas;
    }
}