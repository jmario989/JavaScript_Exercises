document.addEventListener("DOMContentLoaded",function(){
	var kvadrat1 = document.getElementById("kvadrat1");
	kvadrat1.addEventListener("click",function(){
		var pozicija = 0;
		var nijansa = 0;
		var stupnjevi = 0;
		var intervalId = setInterval(animacija, 10);
		function animacija(){
			if(pozicija == 360){
				clearInterval(intervalId);
			}
			else{
				pozicija++;
				kvadrat1.style.top = pozicija + "px";
				kvadrat1.style.left = pozicija + "px";
				nijansa++;
				stupnjevi++;
				var boja = "hsl(" + nijansa + ", 100%, 50%)";
				kvadrat1.style.backgroundColor = boja;
				kvadrat1.style.transform = "rotate(" + stupnjevi + "deg)";
			}
		}
	});
	

	var kvadrat2 = document.getElementById("kvadrat2");
	kvadrat2.addEventListener("click",function(){
		setInterval(animacija, 1000);
		function animacija(){
			var horizontalno = Math.floor(Math.random() * 361);
			var vertikalno = Math.floor(Math.random() * 361);
			kvadrat2.style.left = horizontalno + "px";
			kvadrat2.style.top = vertikalno + "px";
		}
	});
	
	var kvadrat3 = document.getElementById("kvadrat3");
	kvadrat3.addEventListener("click",function(){
		var pozicija = 0;
		var nijansa = 0;
		var stupnjevi = 0;
		var pocetak;
		function animacija(timestamp){
			
			if(pocetak === undefined){
				pocetak = timestamp;
			}
			pozicija++;
			kvadrat3.style.top = pozicija + "px";
			kvadrat3.style.left = pozicija + "px";
			nijansa++;
			stupnjevi++;
			var boja = "hsl(" + nijansa + ",100%, 50%)";
			kvadrat3.style.backgroundColor = boja;
			kvadrat3.style.transform = "rotate(" + stupnjevi + "deg)";

			var protekloVrijeme = timestamp - pocetak;
			if(protekloVrijeme <= 3000) { // animacija se prekida nakon 3 sekunde
				window.requestAnimationFrame(animacija);
			}
		}
		window.requestAnimationFrame(animacija);
	});
	
});









