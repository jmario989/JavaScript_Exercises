// definicija funkcije konstruktora supertipa
function Osoba(imePrezime, adresa, datumRodenja){
    this.imePrezime = imePrezime;
    this.adresa = adresa;
    this.datumRodenja = datumRodenja;

    this.ispisOpcihPodataka = function(){
        document.write("Opći podaci: " + this.imePrezime + ", " + this.adresa + ", " + this.datumRodenja + ".<br />");
    }
}

// definicija funkcije konstruktora podtipa
function Ucenik(imePrezime, adresa, datumRodenja, ocjena1, ocjena2, ocjena3){
    // deklaracija i inicijalizacija svojstva i metoda naslijeđenih iz supertipa
    Osoba.call(this, imePrezime, adresa, datumRodenja);

    this.ocjena1 = ocjena1;
    this.ocjena2 = ocjena2;
    this.ocjena3 = ocjena3;

    this.izracunProsjeka = function(){
        return (this.ocjena1 + this.ocjena2 + this.ocjena3) / 3;
    }
}

function Nastavnik(imePrezime, adresa, datumRodenja, osnovica, koeficijent){
    // deklaracija i inicijalizacija svojstva i metoda naslijeđenih iz supertipa
    Osoba.call(this, imePrezime, adresa, datumRodenja);

    this.osnovica = osnovica;
    this.koeficijent = koeficijent;

    this.izracunPlace = function(){
        return this.osnovica * this.koeficijent;
    }
}

// definicija nasljeđivanja
Ucenik.prototype = Object.create(Osoba.prototype);
Nastavnik.prototype = Object.create(Osoba.prototype);

//definicija nasljeđivanja - 1. način (zastario)
/*
Ucenik.prototype = new Osoba();
Nastavnik.prototype = new Osoba();
*/

//definicija nasljeđivanja - 2. način (slabije performanse)
// Object.setPrototypeOf(Ucenik.prototype, Osoba.prototype);
// Object.setPrototypeOf(Nastavnik.prototype, Osoba.prototype);

// kreiranje objekata iz funkcija konstruktora podtipova
var pero = new Ucenik("Pero Perić", "Adresa 1", "01.06.2006", 3, 2, 5);
var ivo = new Nastavnik("Ivo Ivić", "Adresa 2", "12.12.1990", 5000, 1.9);

pero.ispisOpcihPodataka();
ivo.ispisOpcihPodataka();

document.write("Prosjek učenika " + pero.imePrezime + " iznosi " + pero.izracunProsjeka() + ".<br />");
document.write("Plaća nastavnika " + ivo.imePrezime + " iznosi " + ivo.izracunPlace() + " kn.<br />");

