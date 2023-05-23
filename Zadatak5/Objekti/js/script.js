var auto = {
    brend: {
        tip: "Volvo",
        model: "V40"
    },
    boja: "crvena",
    brzina: 60,
    maxBrzina: 160,
    godinaProizvodnje: 2015,
    ubrzaj: function(brojSekundi){
        while(brojSekundi > 0 && this.brzina <= this.maxBrzina){
            this.brzina += 5;
            brojSekundi--;
        }
        return this.brzina;
    },
    zakoci: function(brojSekundi){
        while(brojSekundi > 0 && this.brzina > 0){
            this.brzina -= 20;
            brojSekundi--;
        }
        return this.brzina;
    },
    promijeniBoju: function(novaBoja){
        this.boja = novaBoja;
        return this.boja;
    }
};

//console.log(auto["brzina"]);
//console.log(auto["zakoci"](4));
console.log("Trenutna brzina automobila: " + auto.brzina);
console.log("Brzina automobila nakon kočenja: " + auto.zakoci(4));
console.log("Brzina automobila nakon ubrzanja: " + auto.ubrzaj(10));

for(let a in auto){
    if(auto.propertyIsEnumerable(a)){
        console.log(a + ": " + auto[a]);
    }
}

auto.promijeniBoju("plava");
console.log("Boja mog " + auto.brend.tip + " automobila je " + auto.boja);
console.log(JSON.stringify(auto));
