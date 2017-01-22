YAHOO.namespace("container");

function init() {
	var handleSubmit = function() {
		this.submit();
	}

	YAHOO.container.dlg = new YAHOO.widget.Dialog("dlg",
		{ 
			modal:true, visible:false, width:"250px", fixedcenter:true, constraintoviewport:true, draggable:true
		}
	);

	YAHOO.container.dlg.cfg.queueProperty("buttons", [ { text:"Submit", handler:handleSubmit } ]);
	YAHOO.container.dlg.render();
	
	var myAnim = new YAHOO.util.Anim("dlg");
	myAnim.attributes.opacity = { from: 0, to: 1 };
	myAnim.duration = 2;
	myAnim.method = YAHOO.util.Easing.easeIn;
	myAnim.onComplete.subscribe(showDialog);

	document.getElementById("loadDialog").onclick = function() {
		myAnim.animate();
		return false;
	} 

	function showDialog() {
		YAHOO.container.dlg.show();	
	}
}

YAHOO.util.Event.addListener(window, "load", init);
