class Persona {
    nombre: string;

    constructor(nombre:string, age:number){
        console.log(`My age is ${age}`);
        this.nombre = nombre;
    }
    setNombre(nombre: string){
        return this.nombre;
    }
    getNombre(){
        return this.nombre;
    }
}

let a = new Persona ("Paola",25);
console.log(`My name is ${a.getNombre()}`);
