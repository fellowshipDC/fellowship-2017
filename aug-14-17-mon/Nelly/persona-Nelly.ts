/*Crear una clase Persona con una propiedad nombre
El constructor recibe nombre y edad como parámetro
El constructor imprime la edad de la persona
Crear un método printName que imprima el nombre de la persona*/

class Persona{
  nombre: string;

  constructor(nombre:string, age: number){
    console.log(`Mi edad es ${age}`)

    this.nombre= nombre;
  }
  printNombre(){
    console.log(`Mi nombre es ${this.nombre}`)
  }
}
let persona1 = new Persona ("Nelly", 24);
persona1.printNombre();
