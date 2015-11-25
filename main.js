	var matrix = [];
	var score = 0;
	var dificultad = 0;
<<<<<<< HEAD
	function reset(){

	}
=======

>>>>>>> refs/remotes/origin/master
	function showMain(boton) {
	    switch (boton.id) {
	        case "opc1":
	            dificultad = 10;
	            break;
	        case "opc2":
	            dificultad = 25;
	            break;
	        case "opc3":
	            dificultad = 40;
	            break;
	    }
	    define();
	}

	function define() {
	    document.getElementById("start").style.visibility = "hidden";
	    document.getElementById("main").style.visibility = "visible";
	    document.getElementById("show").style.width = "100px";
	    document.getElementById("title").style.marginTop = "10px";
	    for (var i = 1; i <= 100; i++) {
	        var element = document.getElementById(i);
	        element.addEventListener("click", myFunction);
	        matrix[i] = 0;
<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/master
	    };

	    var element = document.getElementById("100");
	    element.addEventListener("click", myFunction);
	    for (var i = 0; i < dificultad; i++) {
<<<<<<< HEAD
	        var x = Math.ceil(Math.random() * 100);
	        matrix[x] = "B";
=======
	        var x = Math.floor(Math.random() * 10);
	        var y = Math.floor(Math.random() * 10);
	        while (x == 0 && y == 0) {
	            x = Math.floor(Math.random() * 10);
	            y = Math.floor(Math.random() * 10);
	        };
	        matrix[x * 10 + y] = "B";
>>>>>>> refs/remotes/origin/master

	    };
	}

	function showMatrix() {

	    for (var i = 1; i <= 100; i++) {
	        var casilla = document.getElementById(i);
	        casilla.style.color = '#EEEEEE';
	        casilla.innerHTML = "·";
	        if (matrix[i] == "B") {
	            casilla.style.backgroundImage = "url('bomb.png')";

	        };
	    };
	}


	function myFunction() {
	    var pos = Number(this.id);

	    if (matrix[pos] == "B") {
<<<<<<< HEAD
	    	var audio = new Audio('bomb.mp3');
			audio.play();
=======
>>>>>>> refs/remotes/origin/master
	    	document.getElementById("scoretext").value = score;
	    	if (localStorage.getItem("value") < score) {
	    		localStorage.setItem("value", score);
	    	};
<<<<<<< HEAD
=======
	        this.style.backgroundImage = "url('bomb.png')";
>>>>>>> refs/remotes/origin/master
	        var botonasos = document.querySelectorAll('#game > button');
	        for (var i = 1; i <= botonasos.length; i++) {
	            document.getElementById(i).disabled = true;
	            document.getElementById(i).innerHTML = ".";
	        };
	        showMatrix();
	        return;
	    };

	    score = score + 1;
	   
	    var bombs = 0;
	    aux = pos + 10;
	    if (matrix[aux] == "B") {
	        bombs = bombs + 1;
	     	console.log("+10");
	    };
	    aux = pos - 10;
	    if (matrix[aux] == "B" ) {
	        bombs = bombs + 1;
	        console.log("-10");
	    };
	    if (matrix[pos + 11] == "B" && pos%10 != 0) {
	    	console.log("+11");
	        bombs = bombs + 1;
	    };
	    if (matrix[pos - 11] == "B" && pos%10 != 1) {
	    	console.log("-11");
	        bombs = bombs + 1;
	    };
	    if (matrix[pos + 9] == "B" && pos%10 != 1 ) {
	    	console.log("+9");
	        bombs = bombs + 1;
	    };
	    if (matrix[pos - 9] == "B" && pos%10 != 0) {
	    	console.log("-9");
	        bombs = bombs + 1;
	    };

	    if (matrix[pos + 1] == "B" && pos%10 !=0) {
	    	console.log("+1");
	        bombs = bombs + 1;
	    };
	    if (matrix[pos - 1] == "B" && pos%10 != 1) {
	    	console.log("-1");
	        bombs = bombs + 1;
	    };
	    if (bombs <= 1) {

	        this.style.color = 'blue';

	    } else if (bombs == 2) {

	        this.style.color = 'green';

	    } else {

	        this.style.color = 'red';

	    }
	    this.disabled = true;
	    this.style.backgroundColor = '#EEEEEE';
	    this.innerHTML = bombs;

	}