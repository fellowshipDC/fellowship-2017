var persona = (function () {
    function persona(age, nombre) {
        console.log("Mi edad es " + age);
        this.nombre = nombre;
    }
    persona.prototype.printNombre = function () {
        console.log("Mi nombre es " + this.nombre);
    };
    return persona;
}());
var edad = new persona(21, "Ignacio");
edad.printNombre();
