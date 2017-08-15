class Persona {
  private name: string;

  constructor(name: string, age: number) {
      this.name = name;
      console.log(`I am ${age} years old.`);

    }

  setName(name:string){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  printName(){
    console.log(`My name is ${this.name}`);
  }

}

let persona1 = new Persona("Rolando",25);
persona1.printName();
