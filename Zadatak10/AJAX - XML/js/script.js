document.addEventListener("DOMContentLoaded", function(){

    var sviFilmovi = document.getElementById("svifilmovi");
    document.getElementById("btnprikazi").addEventListener("click", function(){
        // kreiranje objekta koji upravlja asinkronom komunikacijom klijenta i poslužitelja
        var xhttp = new XMLHttpRequest();

        // definicija funkcije koja rukuje odgovorom (ažurira sadržaj stranice)
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var podaci = "", nazivFilma, godinaIzlaska, nazivZanra;
                var xml = this.responseXML;
                var filmKolekcija = xml.getElementsByTagName("film");
                for(let i = 0; i < filmKolekcija.length; i++){
                    nazivFilma = filmKolekcija[i].getElementsByTagName("nazivFilma")[0].innerHTML;
                    godinaIzlaska = filmKolekcija[i].getElementsByTagName("godinaIzlaska")[0].innerHTML;
                    nazivZanra = filmKolekcija[i].getElementsByTagName("nazivZanra")[0].innerHTML;
                    podaci += "<li>" + nazivFilma + ", " + godinaIzlaska + " - " + nazivZanra + "</li>";
                }
                // ugradnja dohvaćenih podataka u HTML
                sviFilmovi.innerHTML = podaci;
            }
        }

        // definicija argumenata zahtjeva i njegovo slanje
        xhttp.open("GET", "http://frodo.ess.hr/api/svi-filmovi.php", true);
        xhttp.send();
    });

    // brisanje podataka
    document.getElementById("btnbrisi").addEventListener("click", function(){
        sviFilmovi.innerHTML = "";
    });

});