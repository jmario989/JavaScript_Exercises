document.addEventListener("DOMContentLoaded", function(){

    var polja = document.getElementsByClassName("polja");

    var gumbici = document.getElementsByTagName("button");
    
    gumbici[0].addEventListener("click", function(){
        var naslov = document.querySelector("h1");
        naslov.style.color = "lightcoral";
        naslov.style.fontSize = "48px";
        naslov.style.textShadow = "1px 1px 2px gray";
		
		// naslov.style.cssText = "color: lightcoral; font-size: 48px; text-shadow: 1px 1px 2px gray;";
		// naslov.setAttribute("style", "color: lightcoral; font-size: 48px; text-shadow: 1px 1px 2px gray;");
    });
    gumbici[1].addEventListener("click", function(){
        var labele = document.getElementsByTagName("label");
        for(let x = 0; x < labele.length; x++){
            labele[x].classList.add("novi_stil_labela");
        }
    });
    gumbici[2].addEventListener("click", function(){
        for(let x = 0; x < polja.length; x++){
            polja[x].classList.add("novi_stil_polja");
        }
    });
    gumbici[3].addEventListener("click", function(){
        var metoda = document.querySelectorAll("form")[0].method;
		alert("Podaci se šalju metodom: " + metoda);
    });
    gumbici[4].addEventListener("click", function(){
        polja[0].value = "pero";
        polja[1].value = "pero123";
    });
    gumbici[5].addEventListener("click", function(){
        var user = polja[0].value;
        var pass = polja[1].value;
        if(user.trim() == "" || pass.trim() == ""){
			alert("Upišite nešto u oba polja.");
		}
		else{
			alert("Korisničko ime: " + user + "\nLozinka: " + pass);
		}
    });
    gumbici[6].addEventListener("click", function(){
        var roditelj = document.querySelectorAll("form")[0];
        var noviElement = document.createElement("input");
        noviElement.setAttribute("type", "submit");
        noviElement.setAttribute("value", "U redu");
        noviElement.setAttribute("id", "gumbic");
        roditelj.appendChild(noviElement);
    });
});


