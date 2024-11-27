ggbBase64 = document.getElementById('applet_container').firstChild.firstChild.getAttribute('data-param-ggbbase64');
let applet = new GGBApplet({showMenubar: true, language: 'en_us', ggbBase64});
applet.inject("applet_container");

let appObj = applet.getAppletObject();
let obj = {};
let keys = appObj.getAllObjectNames();
keys.forEach(name => obj[name] = appObj.getValue(name));

alert(JSON.stringify(obj, null, 4));
