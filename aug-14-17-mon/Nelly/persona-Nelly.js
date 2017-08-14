/*Crear una clase Persona con una propiedad nombre
El constructor recibe nombre y edad como parámetro
El constructor imprime la edad de la persona
Crear un método printName que imprima el nombre de la persona*/
var Persona = (function () {
    function Persona(nombre, age) {
        console.log("Mi edad es " + age);
        this.nombre = nombre;
    }
    Persona.prototype.printNombre = function () {
        console.log("Mi nombre es " + this.nombre);
    };
    return Persona;
}());
var persona1 = new Persona("Nelly", 24);
persona1.printNombre();
