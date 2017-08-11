var nombre = 'Nelly';

var desayunos = ['chilaquiles','omellete'];
desayunos[0] = 'molletes';

var persona = {
    nombre: 'paola', edad: 25
}

persona.telefono = 353757457

function suma(x,y) {
    return x+y;
}

function suma(x,y) {
    if(x < y) {
        return 0;
    } else {
        return x+y;
    }
}

function multiply(num,times) { // times 5
    var res = 0;
    for(var i = 0; i < times; i++) {
        res += num; // res = res + num;
    }
    return res;
}