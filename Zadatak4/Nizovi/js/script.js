var polaznici = ["Pero", "Ana", "Ivo"];
// var polaznici = new Array("Pero", "Ana", "Ivo");

document.write("Duljina niza: " + polaznici.length);
document.write("<br />Prvi element: " + polaznici[0]);
document.write("<br />Svi elementi niza: ");
for(let x = 0; x < polaznici.length; x++){
    document.write(polaznici[x] + " ");
}

// omogućuje iteracije nad iterabilnim objektima: niz, nodeList, ...
// for(let x of polaznici){
//     document.write(x + " ");
// }

// omogućuje iteracije nad brojivim svojstvima objekata (uključujući i nizove)
// for(let x in polaznici){
//     document.write(polaznici[x] + " ");
// }

var izbaceniElement = polaznici.pop();
document.write("<br />Izbačeni element: " + izbaceniElement);
document.write("<br />Svi elementi niza: ");
for(let x = 0; x < polaznici.length; x++){
    document.write(polaznici[x] + " ");
}

polaznici.push("Tomo", "Dario");
document.write("<br />Svi elementi niza: ");
for(let x = 0; x < polaznici.length; x++){
    document.write(polaznici[x] + " ");
}

polaznici.splice(1, 1, "Martina", "Maja");
document.write("<br />Svi elementi niza: ");
for(let x = 0; x < polaznici.length; x++){
    document.write(polaznici[x] + " ");
}

document.write("<br />Novi popis elemenata niza, sortiran po abecedi: " + polaznici.sort());

var brojevi = [9, 16, 25, 36];
var korijenBrojeva = brojevi.map(Math.sqrt);
document.write("<br />Korijen brojeva: ");
korijenBrojeva.forEach(function(broj){
    document.write(broj + " ");
});