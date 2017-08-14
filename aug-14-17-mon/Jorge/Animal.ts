class Animal {
    private age: number;

    constructor(name: string, age: number) {
        console.log(`My name is ${name}`);
        this.age = age;
    }

    setAge(age: number) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

let a = new Animal("Jorge", 45);
console.log(`My age is ${a.getAge()}`);