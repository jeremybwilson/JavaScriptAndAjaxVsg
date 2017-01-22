YAHOO.DDApp = function() {
	return {
		init: function() {
			for (j=0; j<7; j++) {
				new YAHOO.example.DDList("li" + j);
			}
			YAHOO.util.DDM.mode = 1;
		}
	}
} ();

YAHOO.util.Event.addListener(window, "load", YAHOO.DDApp.init);

YAHOO.example.DDList.prototype.onDragOver = function(e, id) {
	var el;
	
	el = ("string" == typeof id) ? YAHOO.util.DDM.getElement(id) : YAHOO.util.DDM.getBestMatch(id).getEl();
	var midY = YAHOO.util.DDM.getPosY(el) + ( Math.floor(el.offsetTop / 2));
	var midX = YAHOO.util.DDM.getPosX(el) + ( Math.floor(el.offsetLeft / 2));

	if (YAHOO.util.Event.getPageY(e) < midY) {
		var el2 = this.getEl();
		var p = el.parentNode;
		p.insertBefore(el2, el);
	}

	if (YAHOO.util.Event.getPageX(e) < midX) {
		var el2 = this.getEl();
		var p = el.parentNode;
		p.insertBefore(el2, el);
	}
};
