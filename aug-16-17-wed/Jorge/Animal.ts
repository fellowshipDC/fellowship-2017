// Nombre de la clase en Mayúscula
// Nombre del archivo en Mayúscula
// Clase por archivo

class Animal {
    // Propiedades
    private _name : string;
    private _age : number;

    // Constructor
    constructor(name: string, age: number) { // Se ejecuta siempre al crear una instancia (crear un objeto)
        console.log('Clase instanciada (Objeto creado)...');
        this._name = name;
        this._age = age;

    }

    // Métodos
    sayHello() {
        console.log(`Me llamo ${this.getName()} y tengo ${this.getAge()} 😜`);
    }

    // Setter (Propiedad Name)
    setName(name: string){
        this._name = name;
    }

    // Getter (Propiedad Name)
    getName() {
        return this._name;
    }

    // Setter (Propiedad Age)
    setAge(age: number){
        this._age = age;
    } 

    // Getter (Aropiedad Age)
    getAge() {
        return this._age;
    }

}

/*let a = new Animal('Jorge', 50); // Creando una instancia de la Clase (Crear un objeto)
a.sayHello();
a.setName("Alberto");
a.sayHello();
console.log(a.getName());
console.log(a.getAge());
a.setAge(40);
a.sayHello();*/

class Bird extends Animal { // Inheritance (Herencia)

    private _action : string; // Properties (Propiedades)

    constructor(name: string, age: number, action: string) { // Constructor
        super(name, age);
        this._action = action;
    }

    public sayHello() { // Methods (Métodos)
        console.log(`Me llamo ${this.getName()} y tengo ${this.getAge()} y puedo ${this._action} 😜`);
    }

}

let b = new Bird("Manuel", 90, "volar");
b.sayHello();

// - Subjets

// OOP
// TypeScript
// Classes
// Objects
// Typed Variables - name : string
// Template String - `${}`
// tsc

// - Parts

// Class
// Object
// Property
// Property Type - string, number, object, array, any
// Property Scope - private, public, static
// Constructor
// Method
// Method Scope - private, public, static
// Setter
// Getter
// Instance
// Inheritance
// Abstract Class

// - Keywords

// class
// private
// public
// constructor
// this
// new
// extends
// let

// Next

// * -> Angular -> UI (Web Apps)
// Directives
// HTTP
// REST