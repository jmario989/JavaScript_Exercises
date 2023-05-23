document.addEventListener("DOMContentLoaded", function(){

    var trazilica = document.getElementById("trazilica");
    var filmoviPoNazivu = document.getElementById("filmoviponazivu");

    trazilica.addEventListener("keyup", function(){
        var pojam = trazilica.value;
        if(pojam.trim() != ""){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    var nazivFilma, godinaIzlaska, nazivZanra;
                    var podaci = "";
                    var jsonData = JSON.parse(this.responseText);

                    if(jsonData.length > 0){
                        podaci += "<table border='1'><tr><th>Naziv filma</th><th>Godina izlaska</th><th>Naziv žanra</th></tr>";
                        for(let i = 0; i < jsonData.length; i++){
                            nazivFilma = jsonData[i].nazivFilma;
                            godinaIzlaska = jsonData[i].godinaIzlaska;
                            nazivZanra = jsonData[i].nazivZanra;
                            podaci += "<tr><td>" + nazivFilma + "</td><td>" + godinaIzlaska + "</td><td>" + nazivZanra + "</td></tr>";
                        }
                        podaci += "</table>";
                    }
                    else{
                        podaci = "<h3>Nisu pronađeni podaci niti o jednom filmu.</h3>";
                    }
                    
                    filmoviPoNazivu.innerHTML = podaci;
                }
            }
            xhttp.open("GET", `http://frodo.ess.hr/api/filmovi-po-nazivu-json.php?pojam=${pojam}`, true);
            xhttp.send();
        }
        else{
            filmoviPoNazivu.innerHTML = "";
        }
    })

});