document.addEventListener("DOMContentLoaded", function () {
    
  /* AJAX zahtjev - Svi korisnici */
    var xhttp = new XMLHttpRequest();
      
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200){
            var podaci = "", korisnickoIme, imePrezime, email, slikaKorisnika;
            var xml = this.responseXML;
            var korisnikKolekcija = xml.getElementsByTagName("korisnik");
            for (let i = 0; i < korisnikKolekcija.length; i++) {
              korisnickoIme = korisnikKolekcija[i].getElementsByTagName("korisnickoIme")[0].innerHTML;
              imePrezime = korisnikKolekcija[i].getElementsByTagName("imePrezime")[0].innerHTML;
              email = korisnikKolekcija[i].getElementsByTagName("email")[0].innerHTML;
              slikaKorisnika = korisnikKolekcija[i].getElementsByTagName("slikaKorisnika")[0].innerHTML;
              
              podaci += "<div class='galerija'><div>";
              podaci += "<span><strong>" + imePrezime + " (" + korisnickoIme + ")</strong></span>";
              podaci += "<img src='" + slikaKorisnika + "' alt='" + imePrezime + "' />";
              podaci += "<hr /><span>" + email + "</span>";
              podaci += "</div></div>";
            }
            document.getElementById("svikorisnici").innerHTML = podaci; 
          }
      };

		// xhttp.open("GET", "http://hlapcic-education.atwebpages.com/korisnici.php", true);
      xhttp.open("GET", "http://frodo.ess.hr/api/korisnici.php", true);
      xhttp.send();
    
});