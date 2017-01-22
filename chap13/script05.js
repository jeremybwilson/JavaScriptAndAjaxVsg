window.onload = showTheTime;

function showTheTime() {
	var now = new Date();

	document.getElementById("showTime").innerHTML = showTheHours(now.getHours()) + showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();
	setTimeout("showTheTime()",1000);
	
	function showTheHours(theHour) {
		return (showMilitaryTime() || (theHour > 0 && theHour < 13)) ? theHour : (theHour == 0) ? 12 : theHour-12;
	}
	
	function showZeroFilled(inValue) {
		return (inValue > 9) ? ":" + inValue : ":0" + inValue;
	}

	function showMilitaryTime() {
		return (document.getElementById("showMilitary").checked);
	}
	
	function showAmPm() {
		return (showMilitaryTime()) ? "" : (now.getHours() < 12) ? " AM" : " PM";
	}
}
