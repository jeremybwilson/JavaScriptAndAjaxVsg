window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.links.length; i++) {
		var linkObj = document.links[i];
		if (linkObj.className) {
			var imgObj = document.getElementById(linkObj.className);
			if (imgObj) {
				setupRollover(linkObj,imgObj);
			}
		}
	}
}

function setupRollover(thisLink,textImage) {
	thisLink.imgToChange = textImage;
	thisLink.onmouseout = rollOut;
	thisLink.onmouseover = rollOver;	
	
	thisLink.outImage = new Image();
	thisLink.outImage.src = textImage.src;

	thisLink.overImage = new Image();
	thisLink.overImage.src = "images/" + thisLink.id + "Text.gif";
}

function rollOver() {
	this.imgToChange.src = this.overImage.src;
}

function rollOut() {
	this.imgToChange.src = this.outImage.src;
}
