/*
 * Todo aplikacija
 * Dodaj, ukloni, označi obavljenim zadatak 
 */

/* samopozivajuća funkcija: closure osigurava privatne članove funkcije */
(function(){
    "use strict";

    /* funkcija konstruktora */
    function Todo(){
        /* dohvaćanje pojedinih HTML elemenata: konstante dostupne samo unutar funkcije */
        const polje = document.querySelector("input"), 
        gumbicDodaj = document.querySelector("button"),
        lista = document.querySelector("ul");

        /* deklaracija funkcija za upravljanje listom zadataka: dostupne samo unutar funkcije Todo */
        function oznaciObavljenim(event){
            var gumbicOznaci = event.target;
            gumbicOznaci.parentNode.classList.toggle("obavljeno");
        }

        function ukloniStavku(event){
            var gumbicUkloni = event.target;
            gumbicUkloni.parentNode.remove();
            polje.focus();
        }

        function dodajGumbicUkloni(stavka){
            var gumbicUkloni = document.createElement("div");
            gumbicUkloni.className = "gumbic-ukloni";
            gumbicUkloni.addEventListener("click", ukloniStavku);
            stavka.appendChild(gumbicUkloni);
        }

        function dodajGumbicOznaci(stavka){
            var gumbicOznaci = document.createElement("input");
            gumbicOznaci.setAttribute("type", "checkbox");
            gumbicOznaci.addEventListener("click", oznaciObavljenim);
            stavka.insertBefore(gumbicOznaci, stavka.firstChild);
        }

        function kreirajStavku(text){
            var stavka = document.createElement("li");
            stavka.innerText = text;
            dodajGumbicUkloni(stavka);
            dodajGumbicOznaci(stavka);
            return stavka;
        }

        function dodajStavku(){
            var text = polje.value.trim();
            if(text != ""){
                var stavka = kreirajStavku(text);
                lista.appendChild(stavka);
                polje.value = "";
                polje.focus();
            }
            else{
                alert("Upišite opis zadatka.");
                polje.focus();
            }
        }

        /* deklaracija metode: dostupna preko objekta kreiranog iz funkcije konstruktora */
        this.init = function(){
            gumbicDodaj.addEventListener("click", dodajStavku);
        }
    }

    /* kreiranje objekta iz funkcije konstruktora */
    var todo = new Todo();

    /* poziv metode init() - nakon što se učita cijela stranica s vanjskim resursima */
    window.addEventListener("load", todo.init);

})();