// definicija imenskog prostora (OP - obrada podataka)
var OP = {};

// definicija modula
OP.moduleArray = (function(){
    // privatna svojstva
    var tip = "[object Array]";
    var toString = Object.prototype.toString;

    // privatne metode
    /* ... */

    // javno sučelje (API)
    return {
        jeNiz: function(n){
            return toString.call(n) === tip;
        },
        uNizu: function(niz, el){
            for(let i = 0; i < niz.length; i++){
                if(niz[i] === el){
                    return i;
                }
            }
        }
    };

})();


// poziv metoda modula
/*
console.log(OP.moduleArray.jeNiz([1, 2, 3]));
console.log(OP.moduleArray.jeNiz(["a", "b", "c"]));
console.log(OP.moduleArray.jeNiz({a: 1}));
console.log(OP.moduleArray.uNizu([1, 2, 3], 2));
*/

// izvoz modula (cijeli imenski prostor)
export {OP};