var Persona = (function () {
    function Persona(Name, edad) {
        console.log("Mi edad es " + edad);
        this.Name = Name;
    }
    Persona.prototype.printName = function () {
        console.log("Mi nombre es " + this.Name);
    };
    return Persona;
}());
var persona1 = new Persona("José Luis", 28);
persona1.printName();
