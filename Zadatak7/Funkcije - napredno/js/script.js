// var brojac = 0;

/*
function dodaj(){
    var brojac = 0;
    brojac += 1;
    return brojac;
}
*/

// closure: omogućuje funkciji da ima privatne varijable
var dodaj = (function(){
    var brojac = 0;
    return function(){
        brojac += 1;
        return brojac;
    }
})();


document.write("<br />Vrijednost brojača: " + dodaj());
document.write("<br />Vrijednost brojača: " + dodaj());
document.write("<br />Vrijednost brojača: " + dodaj());
