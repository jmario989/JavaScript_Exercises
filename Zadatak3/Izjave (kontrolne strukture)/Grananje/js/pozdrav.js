var pozdrav = "";

// dinamičko dohvaćanje vrijednosti sata iz trenutnog datuma i vremena (0 - 23)
var sat = new Date().getHours();

if(sat < 10){
    pozdrav = "Dobro jutro!";
}
else if(sat < 18){
    pozdrav = "Dobar dan!";
}
else {
    pozdrav = "Dobra večer!";
}

document.write("<p>" + pozdrav + "</p>");