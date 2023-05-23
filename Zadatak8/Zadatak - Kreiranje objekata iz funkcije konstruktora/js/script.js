function Zaposlenik(ime, prezime, jmbg, brojBodova, vrijednostBoda){
    this.ime = ime;
    this.prezime = prezime;
    this.jmbg = jmbg;
    this.brojBodova = brojBodova;
    this.vrijednostBoda = vrijednostBoda;

    this.netoIzracunPlace = function(){
        return this.brojBodova * this.vrijednostBoda;
    }

    this.izracunPoreza = function(){
        if(this.netoIzracunPlace() < 3000){
            return this.netoIzracunPlace() * 0.06;
        }
        else if(this.netoIzracunPlace() >= 3000 && this.netoIzracunPlace() < 6000){
            return this.netoIzracunPlace() * 0.12;
        }
        else if(this.netoIzracunPlace() >= 6000){
            return this.netoIzracunPlace() * 0.2;
        }
    }

    this.brutoIzracunPlace = function(){
        return this.netoIzracunPlace() + this.izracunPoreza();
    }
}

var pero = new Zaposlenik("Pero", "Perić", 123412341234, 300, 8);
var tomo = new Zaposlenik("Tomo", "Tomić", 987698769876, 500, 10);
var ana = new Zaposlenik("Ana", "Anić", 567856785678, 900, 12);

document.write("Iznos neto plaće zaposlenika " + pero.ime + " " + pero.prezime + " iznosi " + pero.netoIzracunPlace() + ", dok bruto plaća iznosi " + pero.brutoIzracunPlace() + ".<br />");
document.write("Iznos neto plaće zaposlenika " + tomo.ime + " " + tomo.prezime + " iznosi " + tomo.netoIzracunPlace() + ", dok bruto plaća iznosi " + tomo.brutoIzracunPlace() + ".<br />");
document.write("Iznos neto plaće zaposlenika " + ana.ime + " " + ana.prezime + " iznosi " + ana.netoIzracunPlace() + ", dok bruto plaća iznosi " + ana.brutoIzracunPlace() + ".<br />");