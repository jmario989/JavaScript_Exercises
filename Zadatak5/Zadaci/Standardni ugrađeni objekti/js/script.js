//Date
document.write("<h3>Objekt tipa Date - rad s datumom i vremenom</h3>");
var datumVrijeme = new Date();
document.write("Trenutni datum i vrijeme: " + datumVrijeme);
document.write("<br />Trenutni datum: " + datumVrijeme.toLocaleDateString());
document.write("<br />Vrijednost godine: " + datumVrijeme.getFullYear());
datumVrijeme.setFullYear(2000);
document.write("<br />Datum i vrijeme s novom vrijednošću godine: " + datumVrijeme);

//Math
document.write("<h3>Objekt tipa Math - matematičke operacije</h3>");
var povrsina = Math.pow(6,2) * Math.PI;
document.write("Površina kruga polumjera 6 iznosi: " + povrsina.toFixed(2));

//Objekt RegExp
document.write("<h3>Objekt tipa RegExp - uzorci znakovnih nizova</h3>");
var korisnickoIme = "pero123";
var brojevi = /[0-9]/g;
// var brojevi = /\d/g;
if(korisnickoIme.search(brojevi) != -1){
    document.write("Korisničko ime '" + korisnickoIme + "' sadrži numeričke vrijednosti!");
}
else{
    document.write("Korisničko ime '" + korisnickoIme + "' ne sadrži numeričke vrijednosti!");
}
document.write("<br />Znakovni niz bez numeričkih vrijednosti: " + korisnickoIme.replace(brojevi, "%"));