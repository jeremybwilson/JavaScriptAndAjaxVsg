window.onload = newWinLinks;

function newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		if (document.links[i].className == "newWin") {
			document.links[i].onclick = newWindow;
		}
	}
}

function newWindow() {
	var winName = this.id + "Win";
	var bookWindow = window.open(this.href,winName,"width=135,height=165");
	bookWindow.focus();
	return false;
}
