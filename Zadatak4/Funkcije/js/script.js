// definicija i poziv funkcije
// ključna riječ return

function nazivFunkcije1() {
    var value = 1;
    return value;
}

console.log(nazivFunkcije1());
console.log(nazivFunkcije1());

function nazivFunkcije2() {
    var value = 1;
    return value;
    // iza return izraza prekida se rad funkcije
    value += 1;
}

console.log(nazivFunkcije2());

// parametri i argumenti
function udaljenostKoordinata(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	console.log(Math.sqrt(dx*dx + dy*dy));
}

udaljenostKoordinata(1, 1, 3, 4);
udaljenostKoordinata(2, 2, 3, 3);

function myFunc1(a, b) {
    if(b === undefined){
        b = 1;
    }
    return a + b;
}

console.log(myFunc1(4));

function myFunc2(a, b) {
    if(!b){
        b = 1;
    }
    return a + b;
}

console.log(myFunc2(4));

function myFunc3(a, b) {
    b = b || 1;
    return a + b;
}

console.log(myFunc3(4));

function myFunc4(a, b = 1) {
    return a + b;
}

console.log(myFunc4(4));

// funkcija kao vrijednost
var addOne = function(value) {
    return value + 1;
}

var myVar = addOne(1);
console.log(myVar);
