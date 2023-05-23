var idIntervala;

function sat1(){
    idIntervala = setInterval(vrijeme, 1000);
}

function zaustaviSat(){
    clearInterval(idIntervala);
}

function vrijeme(){
    var datumVrijeme = new Date();
    var sat = datumVrijeme.getHours();
    var minute = datumVrijeme.getMinutes();
    var sekunde = datumVrijeme.getSeconds();
    if(sat <= 9){
        sat = "0" + sat;
    }
    if(minute <= 9){
        minute = "0" + minute;
    }
    if(sekunde <= 9){
        sekunde = "0" + sekunde;
    }
    var ispis = sat + ":" + minute + ":" + sekunde;
    document.getElementById("sat1").innerHTML = ispis;
}

function sat2(){
    var datumVrijeme = new Date();
    var sat = datumVrijeme.getHours();
    var minute = datumVrijeme.getMinutes();
    var sekunde = datumVrijeme.getSeconds();
    if(sat <= 9){
        sat = "0" + sat;
    }
    if(minute <= 9){
        minute = "0" + minute;
    }
    if(sekunde <= 9){
        sekunde = "0" + sekunde;
    }
    var ispis = sat + ":" + minute + ":" + sekunde;
    document.getElementById("sat2").innerHTML = ispis;
    setTimeout(sat2, 1000);
}

function pozdrav(){
    alert("Pozdrav,\ndobrodošli na moje stranice!");
}

function odabirOpcije(){
    var odgovor = confirm("Odaberite jednu opciju:");
    if(odgovor){
        alert("Odabrali ste U redu");
    }
    else{
        alert("Odabrali ste Odustani");
    }
}

function ocjena(){
    var odgovor = prompt("Kako vam se sviđaju naše stranice?", "Najbolje stranice ikad!");
    if(odgovor != null && odgovor.trim() != ""){
        alert("Vaš odgovor: " + odgovor);
    }
    else{
        alert("Hvala što za nas niste odvojili malo svog vremena.");
    }
}

var prozor;
function otvori(){
    prozor = open("https://algebra.hr/");
    // prozor = open("https://algebra.hr/", "_self");
	// prozor = open("https://algebra.hr/", "Novi prozor", "width=600px,height=200px,left=200px,top=200px");
}

function zatvori(){
    if(!prozor || prozor.closed){
        alert("Da bi zatvorili prozor najprije ga otvorite.");
    }
    else{
        prozor.close();
    }
}

function zaslon(){
    location.href = "karakteristike-zaslona.html";
}

function natrag(){
    history.back();
}