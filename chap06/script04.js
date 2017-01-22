window.onload = newWinLinks;

function newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		if (document.links[i].className == "newWin") {
			document.links[i].onclick = newWindows;
		}
	}
}

function newWindows() {
	var bookTitles = new Array("dw8","js6e","ppt");

	for (var i=0; i<bookTitles.length;i++) {
		var imgName = "images/" + bookTitles[i] + ".jpg";
		var winName = bookTitles[i] + "Win";
		var bookWindow = window.open(imgName,winName,"width=135,height=170");
	}
	return false;
}
