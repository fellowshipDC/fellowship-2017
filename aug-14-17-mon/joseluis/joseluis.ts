class Persona {
    edad : number;
    Name : string;
    constructor(Name: string, edad:number){
        console.log(`Mi edad es ${edad}`);
        this.Name = Name;
    }
    printName(){
        console.log(`Mi nombre es ${this.Name}`);
    }
}
let persona1= new Persona("José Luis", 28);
persona1.printName();