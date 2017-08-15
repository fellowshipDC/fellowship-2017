var Persona = (function () {
    function Persona(name, age) {
        this.name = name;
        console.log("I am " + age + " years old.");
    }
    Persona.prototype.setName = function (name) {
        this.name = name;
    };
    Persona.prototype.getName = function () {
        return this.name;
    };
    Persona.prototype.printName = function () {
        console.log("My name is " + this.name);
    };
    return Persona;
}());
var persona1 = new Persona("Rolando", 25);
persona1.printName();
