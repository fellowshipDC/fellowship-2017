class Persona {

    name: string;

    constructor(name: string, age: number){
        console.log(`My age is ${age}`);
        this.name = name;
    }
    setName(){
        this.name = name;
    }
    printName(){
        return this.name;
    }
}

let persona = new Persona("Alex", 28);
console.log(`My name is ${persona.printName()}`);