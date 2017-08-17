// Crea una clase Humano que imprima
// su nombre y su edad
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
// Crea tres objetos diferentes
// de la clase Humano
// Crea una clase Mexicano que herede
// de la clase Humano e imprima su nacionalidad
// Crea tres objetos diferentes de la
// clase Mexicano
var Humano = (function () {
    function Humano(name, age) {
        console.log(name + ", " + age);
    }
    return Humano;
}());
var humano = new Humano("Jorge", 40);
var a = new Humano("Paola", 25);
var b = new Humano("Alex", 28);
var c = new Humano("Berta", 23);
var Mexicano = (function (_super) {
    __extends(Mexicano, _super);
    function Mexicano(name, age, nacionalidad) {
        var _this = _super.call(this, name, age) || this;
        _this._nacionalidad = nacionalidad;
        _this._age = age;
        _this._name = name;
        return _this;
    }
    Mexicano.prototype.sayhello = function () {
        console.log(this._name + "," + this._age + "," + this._nacionalidad);
    };
    return Mexicano;
}(Humano));
var n = new Mexicano('carlos', 19, 'mexicano');
n.sayhello();
var m = new Mexicano('pedro', 16, 'mexicano');
m.sayhello();
var s = new Mexicano('Juan', 36, 'Mexicano');
s.sayhello();
