document.write("<h3>Ispis brojčanih vrijednosti putem uvjetne petlje:</h3>");
var x = -100;
while(x <= 100){
    if(x % 2 != 0){
        document.write(x + " ");
    }
    x++;
}

document.write("<h3>Ispis svih prirodnih brojeva manjih ili jednakih od unesenog:</h3>");
var broj = prompt("Unesite prirodni broj:");
if(broj != null && !isNaN(broj) && Number.isInteger(Number(broj)) && broj > 0){
    while(broj > 0){
        document.write(broj + " ");
        broj--;
    }
}
else{
    document.write("Unesite prirodni broj.");
}
