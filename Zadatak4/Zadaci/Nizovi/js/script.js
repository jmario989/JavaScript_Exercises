var names = ['John', 'Jane', 'Bob',, 'Mike'];

names.push("Marko");

for(let x = 0; x < names.length; x++){
	console.log(names[x]);
}

for(let x = 0; x < names.length; x++){
	console.log(names[x]);
	if(names[x] == 'Jane'){
		break;
	}
}

names = names.filter(function(e){
	return e !== undefined;
});

// for(let x = 0; x < names.length; x++){
// 	if(names[x] === undefined){
// 		names.splice(x, 1);
// 	}
// }

for(let x = 0; x < names.length; x++){
	console.log(names[x]);
}