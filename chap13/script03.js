window.onload = initDate;

function initDate() {
	var now = new Date();
	var dtString;

	if (now.getHours() < 5) {
		dtString = "What are you doing up so late?";
	}
	else if (now.getHours() < 9) {
		dtString = "Good Morning!";
	}
	else if (now.getHours() < 17) {
		dtString = "No surfing during working hours!";
	}
	else {
		dtString = "Good Evening!";
	}
	
	document.getElementById("dtField").innerHTML = dtString;
}
