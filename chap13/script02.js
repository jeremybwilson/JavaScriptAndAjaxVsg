window.onload  = initDate;

function initDate() {
	var now = new Date();
	var dtString;

	if (now.getDay() > 0 && now.getDay() < 6) {
		dtString = "Sorry, it's a weekday.";
	}
	else {
		dtString = "Hooray, it's a weekend!";
	}
	
	document.getElementById("dtField").innerHTML = dtString;
}
