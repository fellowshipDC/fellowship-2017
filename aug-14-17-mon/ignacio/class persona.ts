class persona{
    nombre:string;
    constructor( age: number, nombre:string){
        console.log(`Mi edad es ${age}`);
          this.nombre=nombre;
    }
    printNombre(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}
let edad = new persona(21, "Ignacio"); 
edad.printNombre();