export class Usuario{
    id?: number;
    nombre: String;
    apellido: String;
    email: String;
    password: String;

    constructor (nombre: string, apellido: string, email: string, password: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }
}