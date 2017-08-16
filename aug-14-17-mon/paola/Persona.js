var Persona = (function () {
    function Persona(nombre, age) {
        console.log("My age is " + age);
        this.nombre = nombre;
    }
    Persona.prototype.printNombre = function () {
        console.log("My name is " + this.nombre);
    };
    return Persona;
}());
var a = new Persona("Paola", 25);
a.printNombre();
