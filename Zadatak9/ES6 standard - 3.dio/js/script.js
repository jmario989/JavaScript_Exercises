// definicija bazne klase
class Osoba{
    constructor(imePrezime, adresa, datumRodenja){
        this.imePrezime = imePrezime;
        this.adresa = adresa;
        this.datumRodenja = datumRodenja;
    }

    ispisOpcihPodataka(){
        document.write("Opći podaci: " + this.imePrezime + ", " + this.adresa + ", " + this.datumRodenja + ".<br />");
    }
}

// definicija nasljeđenih ili izvedenih klasa
class Ucenik extends Osoba{
    constructor(imePrezime, adresa, datumRodenja, ocjena1, ocjena2, ocjena3){
        super(imePrezime, adresa, datumRodenja);
        this.ocjena1 = ocjena1;
        this.ocjena2 = ocjena2;
        this.ocjena3 = ocjena3;
    }

    izracunProsjeka(){
        return (this.ocjena1 + this.ocjena2 + this.ocjena3) / 3;
    }
}

class Nastavnik extends Osoba{
    constructor(imePrezime, adresa, datumRodenja, osnovica, koeficijent){
        super(imePrezime, adresa, datumRodenja);
        this.osnovica = osnovica;
        this.koeficijent = koeficijent;
    }

    izracunPlace(){
        return this.osnovica * this.koeficijent;
    }
}

// kreiranje objekata
var pero = new Ucenik("Pero Perić", "Adresa 1", "01.01.2000", 5, 4, 1);
var tomo = new Nastavnik("Tomo Tomić", "Adresa 2", "12.12.1980", 5000, 1.9);

pero.ispisOpcihPodataka();
tomo.ispisOpcihPodataka();

document.write("Prosjek učenika " + pero.imePrezime + " iznosi " + pero.izracunProsjeka() + ".<br />");
document.write("Plaća nastavnika " + tomo.imePrezime + " iznosi " + tomo.izracunPlace() + " kn.<br />");