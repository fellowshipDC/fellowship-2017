class Persona {
    name: string;

    constructor(name: string, age: number) {
        this.name = name;
        console.log(`Tiene ${age}`);
    }

    printName() {
        console.log(this.name);
    }
}

var person = new Persona("Lola", 15);
person.printName();