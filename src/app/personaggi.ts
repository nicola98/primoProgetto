export class personaggi{
    type: string;
    name: string;
    age: number;
    id: number;

    constructor(id: number, type: string = "", name: string = "", age: number = undefined){
        this.id=id;
        this.type = type;
        this.name = name;
        this.age = age; 
    }
}