var brojac = 1;

function pomak(n){
	brojac += n;
	promijeniSliku();
}

function trenutni(n){
	brojac = n;
	promijeniSliku();
}

function promijeniSliku(){
	/* dohvati sve sekcije sa slikama */
	var slike = document.getElementsByClassName("slike");
	/* dohvati sve točke navigacije */
	var tocke = document.getElementsByClassName("tocke");
	/* nakon 3. slike postavi 1. */
	if(brojac > slike.length){
		brojac = 1;
	}
	/* prije 1. slike postavi 3. */
	if(brojac < 1){
		brojac = slike.length;
	}
	/* sakrij sve slike prije nego prikažeš sljedeću */
	for(let i = 0; i < slike.length; i++){
		slike[i].style.display = "none";
	}
	/* svim točkama navigacije ukloni klasu aktivna */
	for(let i = 0; i < tocke.length; i++){
		tocke[i].classList.remove("aktivna");
	}
	/* postavi sljedeću sliku */
	slike[brojac-1].style.display = "block";
	/* označi aktivnu točku */
	tocke[brojac-1].classList.add("aktivna");
}

var brojac2 = 0;
function slideshow(){
	/* dohvati sve sekcije sa slikama */
	var slike = document.getElementsByClassName("slike2");
	/* dohvati sve točke navigacije */
	var tocke = document.getElementsByClassName("tocke2");
	/* sakrij sve slike prije nego prikažeš sljedeću */
	for(let i = 0; i < slike.length; i++){
		slike[i].style.display = "none";
	}
	/* svim točkama navigacije ukloni klasu aktivna */
	for(let i = 0; i < tocke.length; i++){
		tocke[i].classList.remove("aktivna");
	}
	/* postavi brojač */
	brojac2++;
	if(brojac2 > slike.length){
		brojac2 = 1;
	}
	/* postavi sljedeću sliku */
	slike[brojac2-1].style.display = "block";
	/* označi aktivnu točku */
	tocke[brojac2-1].classList.add("aktivna");
	/* nakon tri sekunde ponovo pozovi funkciju */
	setTimeout(slideshow, 3000);
}

 