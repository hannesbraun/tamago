var counter = 0;

function tamagoClick() {
	counter++;
	if (counter % 1000000 === 0)
		document.getElementById("tamago-header").textContent = "So what?";
	else if (counter === 42424242)
		document.getElementById("tamago-header").textContent = "Congratulations, this is not the answer to life, the universe, and everything!";
	else
		document.getElementById("tamago-header").textContent = pad(counter, 7);
	document.getElementById("egg").style.height = "53vw";
	setTimeout( function() {
		document.getElementById("egg").style.height = "50vw";
	}, 60);
}

function pad(num, size) {
	num = num.toString();
	while (num.length < size)
		num = "0" + num;
	return num;
}
