export class Usuario{
    id?: number;
    nombre: String;
    apellido: String;
    mail: String;
    password: String;

    constructor (nombre: string, apellido: string, mail: string, password: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.password = password;
    }
}