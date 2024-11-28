appObj = window.appObj;
keys = appObj.getAllObjectNames();
values = keys.map((key, i) => ({
	index: i,
	name: key,
	value: appObj.getValueString(key),
	def: appObj.getDefinitionString(key)
}));

window.godLog.innerText = JSON.stringify(values, null, 4);
