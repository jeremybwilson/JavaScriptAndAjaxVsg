YAHOO.namespace("calendar");

function init() {
	YAHOO.calendar.cal1 = new YAHOO.widget.Calendar("YAHOO.calendar.cal1","cal1Container");
	YAHOO.calendar.cal1.render();
	
	document.getElementById("resetCal").onclick = YAHOO.calendar.cal1.reset;
	document.getElementById("getSelectedDate").onclick = showSelected;	
}

YAHOO.util.Event.addListener(window, "load", init);

function showSelected() {
	var pickedDate = YAHOO.calendar.cal1.getSelectedDates()[0];
	var outDate =  YAHOO.calendar.cal1.Locale.WEEKDAYS_LONG[pickedDate.getDay()] + ", " + YAHOO.calendar.cal1.Locale.MONTHS_LONG[pickedDate.getMonth()] + " " + pickedDate.getDate() + ".";

	document.getElementById("datePicked").innerHTML = "We're looking forward to seeing you on " + outDate;
}
