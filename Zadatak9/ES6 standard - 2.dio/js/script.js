// Arrow funkcije

/*
const bark = function(){
    return "Wuf wuf";
}
*/

const bark = (x,y) => "Wuf wuf";
console.log(bark());

var myArray = [1, 2, 3, 4, 5];
/*
myArray.forEach(function(broj){
    return console.log(broj);
});
*/

myArray.forEach(broj => console.log(broj));

// Obećanja (objekt tipa Promise)
var getX = () => Math.random() >= 0.5;

var wait = new Promise((resolve, reject) => {
    const x = getX();

    if(x){
        return setTimeout(() => resolve(x), 1000);
    }
    return setTimeout(() => reject("Oh no!"), 1000);
});

wait
.then(value => console.log(value))
.catch(error => console.log(error));