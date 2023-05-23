document.addEventListener("DOMContentLoaded", function(){

    var naslov = document.getElementById("naslov");
    console.log("Naslov stranice: " + naslov.innerHTML);
    console.log("Naslov stranice: " + naslov.textContent);
    console.log("Dio naslova stranice: " + naslov.children[0].textContent);

    var obrazac = document.querySelectorAll("section form")[0];
    var gumbici = document.getElementsByTagName("button");

    gumbici[0].addEventListener("click", function(){
        var noviElement = document.createElement("input");
        noviElement.setAttribute("type", "submit");
        noviElement.setAttribute("value", "U redu");
        obrazac.appendChild(noviElement);
       // obrazac.innerHTML += "<input type='submit' value='U redu' />";
    });

    gumbici[1].addEventListener("click", function(){
        obrazac.removeChild(obrazac.lastElementChild);
    });

    gumbici[2].addEventListener("click", function(){
        var polje = document.getElementsByName("vase-misljenje")[0];
        polje.rows = 10;
        polje.cols = 30;
    });

    gumbici[3].addEventListener("click", function(){
        obrazac.firstElementChild.innerHTML += "<strong> najbolji jezik ikad!</strong>";
    });

    gumbici[4].addEventListener("click", function(){
        obrazac.style.backgroundColor = "red";
    });

    gumbici[5].addEventListener("click", function(){
        obrazac.classList.add("novi-stil");
    });

});