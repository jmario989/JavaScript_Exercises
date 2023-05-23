document.addEventListener("DOMContentLoaded", function () {
    
  /* AJAX zahtjev - Svi korisnici */
    var xhttp = new XMLHttpRequest();
      
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200){
            var podaci = "", korisnickoIme, imePrezime, email, slikaKorisnika;
            var jsonData = JSON.parse(this.responseText);
            for (let i = 0; i < jsonData.length; i++) {
              korisnickoIme = jsonData[i].korisnickoIme;
              imePrezime = jsonData[i].imePrezime;
              email = jsonData[i].email;
              slikaKorisnika = jsonData[i].slikaKorisnika;
              
              podaci += "<div class='galerija'><div>";
              podaci += "<span><strong>" + imePrezime + " (" + korisnickoIme + ")</strong></span>";
              podaci += "<img src='" + slikaKorisnika + "' alt='" + imePrezime + "' />";
              podaci += "<hr /><span>" + email + "</span>";
              podaci += "</div></div>";
            }
            document.getElementById("svikorisnici").innerHTML = podaci; 
          }
      };

	  // xhttp.open("GET", "http://hlapcic-education.atwebpages.com/korisnici-json.php", true);
      xhttp.open("GET", "http://frodo.ess.hr/api/korisnici-json.php", true);
      xhttp.send();
    
});