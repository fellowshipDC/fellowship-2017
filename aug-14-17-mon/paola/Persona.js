var Persona = (function () {
    function Persona(nombre, age) {
        console.log("My age is " + age);
        this.nombre = nombre;
    }
    Persona.prototype.setNombre = function (nombre) {
        return this.nombre;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    return Persona;
}());
var a = new Persona("Paola", 25);
console.log("My name is " + a.getNombre());
