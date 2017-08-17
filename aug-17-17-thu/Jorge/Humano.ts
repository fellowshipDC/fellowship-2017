// Crea una clase Humano que imprima
// su nombre y su edad

// Crea tres objetos diferentes
// de la clase Humano

// Crea una clase Mexicano que herede
// de la clase Humano e imprima su nacionalidad

// Crea tres objetos diferentes de la
// clase Mexicano

class Humano {
    private name:string
    private age:number
    
    constructor(name: string, age:number){
        console.log(`${name}, ${age}`);
    }

    
}

var humano = new Humano("Jorge", 40);
let a = new Humano("Paola", 25);
let b = new Humano("Alex", 28);
let c = new Humano("Berta", 23);

class Mexicano extends Humano{
     private _nacionalidad:string;
     private _name:string;
     private _age:number;
     constructor(name:string,age:number,nacionalidad:string){
      super(name,age);
      this._nacionalidad=nacionalidad;
      this._age=age;
      this._name=name;
     }
     sayhello(){
         console.log(`${this._name},${this._age},${this._nacionalidad}`)
     }

}
let n = new Mexicano('carlos', 19, 'mexicano');
n.sayhello();
let m = new Mexicano('pedro',16,'mexicano')
m.sayhello();
let s =new Mexicano('Juan',36, 'Mexicano');
s.sayhello();