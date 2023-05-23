var i = 3;

while (i <= 20) {
	if (i % 9 == 0) {
        i++;
		continue;
	}
    document.write(i + " ");
    i++;
}

/* ----------------------- */

var varOne = 0;
for (let i = 0; i < 4; i++){
    for (let j = 0; j < 4; j++){
        varOne++;
    }
}
console.log(varOne); // 16