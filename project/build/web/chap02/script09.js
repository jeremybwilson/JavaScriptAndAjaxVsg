window.onload = writeMessage;

function writeMessage() {
	if (document.referrer != "") {
		document.getElementById("referrerMsg").innerHTML = "I hope you like this page better than " + document.referrer;
	}
}
