// definicija funkcije konstruktora
function Ucenik(imePrezime, adresa, datumRodenja, ocjena1, ocjena2, ocjena3){
    // deklaracija i inicijalizacija svojstva
    this.imePrezime = imePrezime;
    this.adresa = adresa;
    this.datumRodenja = datumRodenja;
    this.ocjena1 = ocjena1;
    this.ocjena2 = ocjena2;
    this.ocjena3 = ocjena3;

    // deklaracija metoda
    this.ispisOpcihPodataka = function(){
        document.write("Opći podaci: " + this.imePrezime + ", " + this.adresa + ", " + this.datumRodenja + ".<br />");
    }

    this.izracunProsjeka = function(){
        return (this.ocjena1 + this.ocjena2 + this.ocjena3) / 3;
    }
}

// kreiranje objekata iz funkcije konstruktora
var pero = new Ucenik("Pero Perić", "Adresa 1", "01.01.2000", 5, 1, 2);
var tomo = new Ucenik("Tomo Tomić", "Adresa 2", "12.12.2001", 4, 4, 5);


// dohvaćanje svojstva + poziv metoda
pero.ispisOpcihPodataka();
tomo.ispisOpcihPodataka();

document.write("Prosjek učenika " + pero.imePrezime + " iznosi " + pero.izracunProsjeka() + ".<br />");
document.write("Prosjek učenika " + tomo.imePrezime + " iznosi " + tomo.izracunProsjeka() + ".<br />");