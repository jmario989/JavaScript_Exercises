document.write("<h3>Ispis brojčanih vrijednosti putem petlje s brojačem:</h3>");

for(let x = 100; x >= 0; x-=10){
    if(x == 50){
        continue;
        // break;
    }
    document.write("Vrijednost brojača: " + x + "<br />");
}

document.write("<h3>Ispis svih neparnih brojeva u zadanom rasponu:</h3>");

for(let x = -100; x <= 100; x++){
    if(x % 2 != 0){
        document.write(x + " ");
    }
}