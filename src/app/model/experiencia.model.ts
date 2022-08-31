export class Experiencia{
    id?: number;
    empresa: String;
    desde: number;
    hasta: number;
    descripcion: String;


    constructor (empresa: string, desde: number, hasta: number, descripcion: string){
        this.empresa = empresa;
        this.desde = desde;
        this.hasta = hasta;
        this.descripcion = descripcion;
    }
}