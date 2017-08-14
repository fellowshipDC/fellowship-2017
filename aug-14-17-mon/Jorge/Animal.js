var Animal = (function () {
    function Animal(name, age) {
        console.log("My name is " + name);
        this.age = age;
    }
    Animal.prototype.setAge = function (age) {
        this.age = age;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    return Animal;
}());
var a = new Animal("Jorge", 45);
console.log("My age is " + a.getAge());
