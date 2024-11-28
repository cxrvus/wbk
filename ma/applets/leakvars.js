let appObj = window.applet.getAppletObject();
let obj = {};
let keys = appObj.getAllObjectNames();
keys.forEach(name => obj[name] = appObj.getValue(name));

let text = JSON.stringify(obj, null, 4);
window.appletCont.innerText = text;
