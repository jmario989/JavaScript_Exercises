// 1.
"use strict";
var a = 78;

/* 
var b = 0o34;
console.log(b);//28
*/
var b = 34;

const myObject = {property1:1, property2:2, property3:1};

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

const allUsers = [...users, user];
console.log(allUsers);


// 3.
// Prvi console.log ce vratiti error i is not defined
// Sljedecih 10 console log-ova ce se ispisati sa brojkama 0 do 9 nakon 1 sekunde
// Ako dodamo var umjesto let, onda ce se ispisati broj 10 i 10 puta broj 10 nakon 1 sekunde
for (var i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
}

console.log(i);
