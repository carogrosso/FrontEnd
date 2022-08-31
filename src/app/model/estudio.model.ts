export class Estudio{
    id?: number;
    titulo: String;
    institucion: String;
    anoEgreso: number;


    constructor (titulo: string, institucion: string, anoEgreso: number){
        this.titulo = titulo;
        this.institucion = institucion;
        this.anoEgreso = anoEgreso;
    }
}