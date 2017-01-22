window.onload = initWindows;

function initWindows() {
	var newText, newBr;
	var newWindow = window.open("","newWin","location,scrollbars,resizable=yes,width=300,height=300");
	var newDoc = newWindow.document;
	
	newDoc.title = "Generated Window";
	newDoc.bgColor = "#000000";
	newDoc.fgColor = "#FFFFFF";
	newDoc.body.innerHTML = "<h2>This window shows the result from the other window<\/h2><div id='looper'> </div>";
	
	var loopDiv = newDoc.getElementById("looper");

	for (var i=0; i<100; i++) {
		newText = newDoc.createTextNode("The loop is now at: " + i);
		newBr = newDoc.createElement("br");
		
		loopDiv.appendChild(newText);
		loopDiv.appendChild(newBr);
	}
}
