export class personaggi{
    type: string;
    name: string;
    age: number;

    constructor(type: string = "", name: string = "", age: number = undefined){
        this.type = type;
        this.name = name;
        this.age = age; 
    }
}