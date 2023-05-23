var tekst = " Lorem ipsum dolor sit amet";

var duljina = tekst.length;
var rijecSit = tekst.substring(19, 22);
// var noviString = tekst + " novi string ...";
var noviString = tekst.concat(" novi string ...");


document.write("<p>Duljina stringa: " + duljina + "</p>");
// template literali
// document.write(`<p>Duljina stringa: ${duljina}</p>`);
document.write("<p>Dio stringa: " + rijecSit + "</p>");
document.write("<p>Novi string: " + noviString + "</p>");
document.write("<p>Zamjena dijela stringa: " + tekst.replace("amet", "elit") + "</p>");
document.write("<p>Sva slova velika: " + tekst.toUpperCase() + "</p>");
document.write("<p>Slovo s vrijednošću indeksa 13: " + tekst.charAt(13) + "</p>");
document.write("<p>Bez suvišnih razmaka: " + tekst.trim() + "</p>");