var rijeci = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function pronadiNajduljuRijec(niz) {
	var rijec = ""; 
	
	for (let i = 0; i < niz.length; i++) {
	    if (rijec.length < niz[i].length) {
			rijec = niz[i];
	    }
	}
	
	return rijec;
}

var najduljaRijec = pronadiNajduljuRijec(rijeci);

console.log(najduljaRijec);