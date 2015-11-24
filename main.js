var matrix = [];
var score = 0;
function define(){
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var element = document.getElementById(i+""+j);
			if (i != 0 || j != 0) {
				element.addEventListener("click", myFunction);
			};
			matrix[i*10+j] = 0;
		};	
	};
	var element = document.getElementById("100");
	element.addEventListener("click", myFunction);
	for (var i = 0; i< 40; i++) {
		var x = Math.floor(Math.random()*10);
		var y = Math.floor(Math.random()*10);
		while (x == 0 && y == 0) {
		x = Math.floor(Math.random()*10);
		y = Math.floor(Math.random()*10);
		};
		matrix[x*10+y] = "B";

	};	
}
function showMatrix(){
	var cont = 0;
	for (var i = 0; i<10; i++) {
		for (var j = 0; j< 10; j++) {
			
			if (matrix[i*10+j] == "B") {
				cont ++;
				var casilla = document.getElementById(i+""+j);
				casilla.style.color = 'red';
				casilla.innerHTML = "B";
			};
		};
	};
}


function myFunction() {
	var pos = Number(this.id);
	if (matrix[pos] == "B") {
		var casilla = document.getElementById(pos);
		casilla.style.color = 'red';
		casilla.innerHTML = "B";
		alert("boomb");
		return;
	};

	score = score + 1;
	localStorage.setItem("value",score);
	var bombs = 0;
	aux = pos+10;
	if (matrix[aux] == "B") {
		bombs = bombs +1;
		console.log("abajo");
	};
	aux = pos-10;
	if (matrix[aux] == "B") {
		bombs = bombs +1;
		console.log("arriba");
	};
	if (matrix[pos+11] == "B") {
		bombs = bombs +1;
	};
	if (matrix[pos-11] == "B") {
		bombs = bombs +1;
	};
	if (matrix[pos+9] == "B") {
		bombs = bombs +1;
	};
	if (matrix[pos-9] == "B") {
		bombs = bombs +1;
	};

	if (matrix[pos+1] == "B") {
		bombs = bombs +1;
	};
	if (matrix[pos-1] == "B") {
		bombs = bombs +1;
	};
	this.disabled = true;
	this.style.color = 'black';
	this.style.backgroundColor = '#A9F5D0';
	this.innerHTML = bombs;
	
}