var imePrezime = 'Marko Hlapčić';


document.write("<p>Broj znakova imena i prezimena: " + imePrezime.length + "</p>");
document.write("<p>Broj znakova imena i prezimena bez razmaka: " + imePrezime.replace(/\s/g, "").length + "</p>");
document.write("<p>Prvo slovo imena: " + imePrezime.charAt(0) + "</p>");
document.write("<p>Prezime: " + imePrezime.substring(6) + "</p>");
document.write("<p>Ime-prezime: " + imePrezime.replace(" ", "-") + "</p>");


