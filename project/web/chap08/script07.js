window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.images.length; i++) {
		if (document.images[i].parentNode.tagName == "A") {
			setupRollover(document.images[i]);
		}
	}
}

function setupRollover(thisImage) {
	var re = /\s*_off\s*/;

	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = rollOut;

	thisImage.clickImage = new Image();
	thisImage.clickImage.src = thisImage.src.replace(re,"_click");
	thisImage.onclick = rollClick;	

	thisImage.overImage = new Image();
	thisImage.overImage.src = thisImage.src.replace(re,"_on");
	thisImage.onmouseover = rollOver;	
}

function rollOver() {
	this.src = this.overImage.src;
}

function rollOut() {
	this.src = this.outImage.src;
}

function rollClick() {
	this.src = this.clickImage.src;
}
