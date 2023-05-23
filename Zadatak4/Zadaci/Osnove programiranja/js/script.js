// 1.
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
// document.write("<p>Prvi zadatak: " + fullName + "</p>");
document.write("<p>Prvi zadatak: " + firstName.concat(" ", lastName) + "</p>");

// 2.
var x;
var z = 2, y = 10;
if (z === 2) {
	x = y;
} else {
	x = 5;
}
document.write("<p>Drugi zadatak: " + x + "</p>");

// 3. 
for (let i = 1; i <= 20; i++) {
	if (i % 2 == 0) {
		console.log("Broj " + i + " je paran.");
	} else {
		console.log("Broj " + i + " je neparan.");
	}
}









