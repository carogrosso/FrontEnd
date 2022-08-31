export class Proyecto{
    id?: number;
    titulo: String;
    descripcion: String;
    link: String;
    imagen: String;


    constructor (titulo: string, descripcion: string, link: string, imagen: string){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.link = link;
        this.imagen = imagen;
    }
}