//definicija bazne klase
class Vozilo{
	constructor(proizvodac, model, cijena, porez){
		this.proizvodac = proizvodac;
		this.model = model;
		this.cijena = cijena;
		this.porez = porez;
	}

	izracunUkupneCijene(){
		var ukupnaCijena = this.cijena + this.cijena * this.porez;
		// document.write("Vozilo " + this.model + " proizvođača " + this.proizvodac + " košta "+ (this.cijena + this.cijena * this.porez) + " kn.<br />");
		// document.write(`Vozilo ${this.model} košta ${this.cijena + this.cijena * this.porez} kn.<br />`);
		document.write("Vozilo "+ this.model + " proizvođača " + this.proizvodac + " košta " + ukupnaCijena + " kn.<br />");
	}
}

//definicija nasljeđenih ili izvedenih klasa
class Automobil extends Vozilo{
	constructor(proizvodac, model, cijena, porez, snagaKw, ubrzanje, maksimalnaBrzina){
		super(proizvodac, model, cijena, porez);
		this.snagaKw = snagaKw;
		this.ubrzanje = ubrzanje;
		this.maksimalnaBrzina = maksimalnaBrzina;
	}
	
	izracunSnageKs(){
		/* 1 kW = 1.36 KS */
		return (this.snagaKw * 1.36).toFixed(2);
	}
}

class Brod extends Vozilo{
	constructor(proizvodac, model, cijena, porez, brzinaCvor, nosivost, gaz){
		super(proizvodac, model, cijena, porez);
		this.brzinaCvor = brzinaCvor;
		this.nosivost = nosivost;
		this.gaz = gaz;
	}

	izracunBrzineKmH(){
		/* 1 čvor = 1.85 km/h */
		return (this.brzinaCvor * 1.85).toFixed(2);
	}
}

//kreiranje objekata iz izvedenih klasa
var mercedes = new Automobil("Mercedes", "C 200", 200000, 0.2, 220, 4.2, 260);
var voyager = new Brod("Ranieri", "Voyager19s", 1200000, 0.25, 24, 70000, 3.5);

mercedes.izracunUkupneCijene();
document.write("Snaga automobila iznosi " + mercedes.snagaKw + " kw, što je jednako " + mercedes.izracunSnageKs() + " KS.<br /><br />");

voyager.izracunUkupneCijene();
document.write("Maksimalna brzina broda iznosi " + voyager.brzinaCvor + " čvora, što je jednako " + voyager.izracunBrzineKmH()+ " km/h.<br />");