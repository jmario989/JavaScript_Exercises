var x = 0;

try {
    x = y + 1;
}
catch(error){
    console.log("Greška: " + error.name + ", " + error.message);
}
finally {
    console.log("Ja se uvijek izvršim");
}

console.log("Vrijednost varijable x: " + x);