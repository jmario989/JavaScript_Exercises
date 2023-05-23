// template literali
const ime = "Ivan";
const pozdrav = `Moje ime je ${ime}`;
console.log(pozdrav);

// "Spread" operator
function ispisImena(prvo, drugo, trece){
    console.log(drugo);
}

const x = ["Ivan", "Pero", "Tomo"];
ispisImena(...x);

const korisnik = {
    imePrezime: "Pero Perić",
    adresa: "Neka adresa",
    godinaRodenja: 2000
};

const { imePrezime, adresa, godinaRodenja } = korisnik;
console.log(imePrezime);

const brojevi = [20, 10, 100, 35, 12];
[a, b, ...rest] = brojevi;
console.log(rest);

// "Rest" operator
function vratiZbroj(...args){ // args -> niz
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

console.log(vratiZbroj(1));
console.log(vratiZbroj(1, 2, 3));