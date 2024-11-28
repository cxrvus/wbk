appletCont = document.getElementById('applet_container').firstChild.firstChild;
window.appletCont = appletCont;
ggbBase64 = appletCont.getAttribute('data-param-ggbbase64');
applet = new GGBApplet({showMenubar: true, language: 'en_us', ggbBase64});
applet.inject("applet_container");
window.appObj = applet.getAppletObject();

godLog = document.createElement('code');
window.godLog = godLog;
document.body.appendChild(godLog);
