var Persona = (function () {
    function Persona(name, age) {
        this.name = name;
        console.log("Tiene " + age);
    }
    Persona.prototype.printName = function () {
        console.log(this.name);
    };
    return Persona;
}());
var person = new Persona("Lola", 15);
person.printName();
