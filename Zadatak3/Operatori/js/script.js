var a = 10, b = 7, c = 3, d = 5, e = 2, z;
var ime = "Pero", prezime = "Perić";
const pi = 3.14;
// vrijednost konstante se ne može mijenjati
// pi = 4; 

var rezultat = 6/++e*(6+6);
// var imePrezime = ime + " " + prezime;
var imePrezime = ime.concat(" ", prezime);
var sud = !(a > b && c == d);
// var uvjetnaVrijednost = a > b ? "Veće" : "Manje";
var uvjetnaVrijednost = a > b ? "Veće" : a < b ? "Manje" : "Jednako";


document.write("<p>Vrijednost izračuna: " + rezultat + "</p>");
document.write("<p>Ime Prezime: " + imePrezime + "</p>");
document.write("<p>Istinitost suda: " + sud + "</p>");
document.write("<p>Vrijednost uvjetne varijable: " + uvjetnaVrijednost + "</p>");
document.write("<p>Varijabla bez vrijednosti: " + z + "</p>");

var objekt = {
    a: {
        b: 1
    }
};

document.write("<p>Opcionalno ulančavanje: " + objekt.c?.b + "</p>");

var x = null ?? "default";
document.write("<p>Nullish spajanje: " + x + "</p>");

var y = 0;
y ??= "default";

document.write("<p>Nullish dodjeljivanje vrijednosti: " + y + "</p>");