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
	
	document.getElementById("loadDialog").onclick = function() {
		YAHOO.container.dlg.show();
		return false;
	} 
}

YAHOO.util.Event.addListener(window, "load", init);
