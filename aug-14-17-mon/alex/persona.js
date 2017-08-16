var Persona = (function () {
    function Persona(name, age) {
        console.log("My age is " + age);
        this.name = name;
    }
    Persona.prototype.setName = function () {
        this.name = name;
    };
    Persona.prototype.printName = function () {
        return this.name;
    };
    return Persona;
}());
var persona = new Persona("Alex", 28);
console.log("My name is " + persona.printName());
