var poruka = "";

// dinamičko dohvaćanje oznake dana u tjednu iz trenutnog datuma i vremena (0 - 6)
var dan = new Date().getDay();

switch(dan){
    case 0:
        poruka = "Danas je nedjelja.";
        break;
    case 1:
        poruka = "Danas je ponedjeljak.";
        break;
    case 2:
        poruka = "Danas je utorak.";
        break;
    case 3:
        poruka = "Danas je srijeda.";
        break;
    case 4:
        poruka = "Danas je četvrtak.";
        break;
    case 5:
        poruka = "Danas je petak.";
        break;
    case 6:
        poruka = "Danas je subota.";
        break;
    default:
        poruka = "Ne može se odrediti dan u tjednu.";
}

document.write("<p>" + poruka + "</p>");

/*
var ispis = "";
var x = -10;
switch(true){
	case x > 0:
		ispis = "Veće od 0";
		break;
	case x < 0:
		ispis = "Manje od 0";
		break;
	default:
		ispis = "Jednako 0";
}

document.write("<p>" + ispis + "</p>");
*/