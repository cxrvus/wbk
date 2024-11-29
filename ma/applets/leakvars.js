appletCont = window.applet_container.firstChild.firstChild;
ggbBase64 = appletCont.getAttribute('data-param-ggbbase64');
applet = new GGBApplet({ggbBase64});
obj = applet.getAppletObject();

keys = obj.getAllObjectNames();
values = keys.map((key, i) => ({
	index: i,
	name: key,
	value: obj.getValueString(key),
	def: obj.getDefinitionString(key)
}));

if (!window.godLog) {
	godLog = document.createElement('code');
	window.godLog = godLog;
	document.body.appendChild(godLog);
}
else window.godLog.innerText = JSON.stringify(values, null, 4);
