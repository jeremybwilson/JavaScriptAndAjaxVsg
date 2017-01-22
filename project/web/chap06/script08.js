var newWindow = null;
window.onload = newWinLinks;

function newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].onclick = chgWindowState;
	}
}

function windowOpen() {
	if (newWindow && !newWindow.closed) {
		return true;
	}
	return false;
}

function chgWindowState() {
	if (this.id == "closeWin") {
		if (windowOpen()) {
			newWindow.close();
		}
		else {
			alert("The window isn't open");
		}
		return false;
	}
	if (this.id != "closeWin") {
		if (windowOpen()) {
			alert("The window is already open!");
			return false;
		}
	}
	
	var topPos = (this.id.indexOf("bottom") == -1) ? 0 : screen.availHeight-200;
	var leftPos = (this.id.indexOf("Right") == -1) ? 0 : screen.availWidth-300;

	newWindow = window.open("","newWin","toolbar,location=yes,width=300,height=200,left="+leftPos+",top="+topPos);
	return false;
}
