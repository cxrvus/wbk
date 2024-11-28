let appletCont = document.getElementById('applet_container').firstChild.firstChild;
window.appletCont = appletCont;
let ggbBase64 = appletCont.getAttribute('data-param-ggbbase64');
let applet = new GGBApplet({showMenubar: true, language: 'en_us', ggbBase64});
window.applet = applet;
applet.inject("applet_container");
