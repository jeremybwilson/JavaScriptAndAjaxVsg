var pageCount = new Array(0,0,0);
var pageArray = new Array("frame7a.html","frame7b.html","frame7c.html");

window.onload = initFrames;

function initFrames() {
	var leftWin = document.getElementById("left").contentWindow.document;

	for (var i=0; i<leftWin.links.length; i++) {
		leftWin.links[i].onclick = resetPageCt;
		leftWin.links[i].thisPage = i;
	}
	
	bumpPageCt(0);	
}

function bumpPageCt(currPage) {
	pageCount[currPage]++;

	var contentWin = document.getElementById("content").contentWindow.document;
	contentWin.getElementById("pageCt").innerHTML = pageCount[currPage] + " ";
}

function resetPageCt() {
	document.getElementById("content").contentWindow.location.href = pageArray[this.thisPage];

	setTimeout("bumpPageCt("+this.thisPage+")",1000);
	return false;
}
