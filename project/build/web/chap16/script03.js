YAHOO.namespace("calendar");

function init() {
	this.today = new Date();

	var thisMonth = this.today.getMonth();
	var thisDay = this.today.getDate();
	var thisYear = this.today.getFullYear();

	this.link1 = document.getElementById("dateLink1");
	this.link2 = document.getElementById("dateLink2");

	this.selMonth1 = document.getElementById("selMonth1");
	this.selDay1 = document.getElementById("selDay1");

	this.selMonth1.selectedIndex = thisMonth;
	this.selDay1.selectedIndex = thisDay-1;

	this.selMonth2 = document.getElementById("selMonth2");
	this.selDay2 = document.getElementById("selDay2");

	this.selMonth2.selectedIndex = thisMonth;
	this.selDay2.selectedIndex = thisDay-1;
	
	this.selMonth1.onchange = changeDate1;
	this.selDay1.onchange = changeDate1;
	this.selMonth2.onchange = changeDate2;
	this.selDay2.onchange = changeDate2;

	YAHOO.calendar.cal1 = new YAHOO.widget.Calendar2up("YAHOO.calendar.cal1","container1",(thisMonth+1)+"/"+thisYear,(thisMonth+1)+"/"+thisDay+"/"+thisYear);
	YAHOO.calendar.cal1.title = "Select your desired check-in date:";
	YAHOO.calendar.cal1.setChildFunction("onSelect",setDate1);
	YAHOO.calendar.cal1.render();
	
	YAHOO.calendar.cal2 = new YAHOO.widget.Calendar2up("YAHOO.calendar.cal2","container2",(thisMonth+1)+"/"+thisYear,(thisMonth+1)+"/"+thisDay+"/"+thisYear);
	YAHOO.calendar.cal2.title = "Select your desired check-out date:";
	YAHOO.calendar.cal2.setChildFunction("onSelect",setDate2);
	YAHOO.calendar.cal2.render();
	
	document.getElementById("dateLink1").onclick = showCalendar1;
	document.getElementById("dateLink2").onclick = showCalendar2;
}

function showCalendar1() {
	YAHOO.calendar.cal2.hide();
	
	var pos = YAHOO.util.Dom.getXY(link1);
	YAHOO.calendar.cal1.outerContainer.style.display="block";
	YAHOO.util.Dom.setXY(YAHOO.calendar.cal1.outerContainer, [pos[0],pos[1]+link1.offsetHeight+1]);
}

function showCalendar2() {
	YAHOO.calendar.cal1.hide();

	var pos = YAHOO.util.Dom.getXY(link2);
	YAHOO.calendar.cal2.outerContainer.style.display="block";
	YAHOO.util.Dom.setXY(YAHOO.calendar.cal2.outerContainer, [pos[0],pos[1]+link2.offsetHeight+1]);
}

function setDate1() {
	var date1 = YAHOO.calendar.cal1.getSelectedDates()[0];
	selMonth1.selectedIndex=date1.getMonth();
	selDay1.selectedIndex=date1.getDate()-1;
	YAHOO.calendar.cal1.hide();
}

function setDate2() {
	var date2 = YAHOO.calendar.cal2.getSelectedDates()[0];
	selMonth2.selectedIndex=date2.getMonth();
	selDay2.selectedIndex=date2.getDate()-1;
	YAHOO.calendar.cal2.hide();
}

function changeDate1() {
	var month = selMonth1.selectedIndex;
	var day = selDay1.selectedIndex + 1;
	var year = today.getFullYear();

	YAHOO.calendar.cal1.select((month+1) + "/" + day + "/" + year);
	YAHOO.calendar.cal1.setMonth(month);
	YAHOO.calendar.cal1.render();
}

function changeDate2() {
	var month = selMonth2.selectedIndex;
	var day = selDay2.selectedIndex + 1;
	var year = today.getFullYear();
	
	YAHOO.calendar.cal2.select((month+1) + "/" + day + "/" + year);
	YAHOO.calendar.cal2.setMonth(month);
	YAHOO.calendar.cal2.render();
}	

YAHOO.util.Event.addListener(window, "load", init);		
