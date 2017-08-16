// Nombre de la clase en Mayúscula
// Nombre del archivo en Mayúscula
// Clase por archivo
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    // Constructor
    function Animal(name, age) {
        console.log('Clase instanciada (Objeto creado)...');
        this._name = name;
        this._age = age;
    }
    // Métodos
    Animal.prototype.sayHello = function () {
        console.log("Me llamo " + this.getName() + " y tengo " + this.getAge() + " (:");
    };
    // Setter (Propiedad Name)
    Animal.prototype.setName = function (name) {
        this._name = name;
    };
    // Getter (Propiedad Name)
    Animal.prototype.getName = function () {
        return this._name;
    };
    //Setter (Propiedad Age)
    Animal.prototype.setAge = function (age) {
        this._age = age;
    };
    // Getter (Aropiedad Age)
    Animal.prototype.getAge = function () {
        return this._age;
    };
    return Animal;
}());
/*let a = new Animal('Jorge', 50); // Creando una instancia de la Clase (Crear un objeto)
a.sayHello();
a.setName("Alberto");
a.sayHello();
console.log(a.getName());
console.log(a.getAge());
a.setAge(40);
a.sayHello();*/
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, action) {
        var _this = _super.call(this, name, age) || this;
        _this._action = action;
        return _this;
    }
    Bird.prototype.sayHello = function () {
        console.log("Me llamo " + this.getName() + " y tengo " + this.getAge() + " y puedo " + this._action + " (:");
    };
    return Bird;
}(Animal));
var b = new Bird("Manuel", 90, "volar");
b.sayHello();
