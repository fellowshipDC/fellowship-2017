/*
Variables
Tipos de dato
Number
String
Boolean
Array
Object
Functions
*/

var fellows = 14;
console.log(fellows);

var student = "Ramos";
var lista = ["leche", "cereal", "pan", "huevo"];

lista[1] = "mantequilla";
console.log(lista);

var receta = {
    nombre: "pastel chocolate", 
    tiempo: 120,
    ingredientes: lista,
    porciones: 8,
}

receta.porciones = 4;
receta.procedimiento = {
    primero: "juntar todo",
    segundo: "batir",
    tercero: "meter al horno"
}
console.log(receta);

//Functions

var x;
var y;
y = 8;
x = 5;
var suma;
suma = y + x;

console.log(suma);

var x;
var y;
x = 44;
y = 65;
suma = x + y;
console.log(suma);

function sumar (){
var x;
var y;
x = 44;
y = 65;
suma = x + y;
console.log(suma);  
}

sumar();

function sumatoria(a,b){
    return a + b;
}

sumatoria(40,33);