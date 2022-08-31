export class Skill{
    id?: number;
    skill: String;
    porcentaje: number;
    color: String;


    constructor (skill: string, porcentaje: number, color: string){
        this.skill = skill;
        this.porcentaje = porcentaje;
        this.color = color;
    }
}