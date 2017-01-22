YAHOO.namespace("container");

function init() {
	var handleSubmit = function() {
		YAHOO.log("Dialog submitted","warn");
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
		YAHOO.log("Animation starting now");
		return false;
	} 

	var myConfigs = {
		width: "250px",
		right: "10em",
		top: "10%",
		fontSize: "80%"
	};
	var myContainer = null;
	var myLogReader = new YAHOO.widget.LogReader(myContainer, myConfigs);

	function showDialog() {
		YAHOO.container.dlg.show();	
		YAHOO.log("Animation ended","warn");
	}
}

YAHOO.util.Event.addListener(window, "load", init);
