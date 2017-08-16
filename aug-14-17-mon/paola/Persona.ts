class Persona {
    nombre: string;

    constructor(nombre:string, age:number){
        console.log(`My age is ${age}`);
        this.nombre = nombre;
    }
    printNombre(){
        console.log(`My name is ${this.nombre}`);
    }
}
let a = new Persona("Paola",25);
a.printNombre();
