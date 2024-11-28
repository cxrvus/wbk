appletCont = document.getElementById('applet_container').firstChild.firstChild;
ggbBase64 = appletCont.getAttribute('data-param-ggbbase64');
applet = new GGBApplet({language: 'en_us', ggbBase64});
solution = applet.getAppletObject().getValueString("ListeGewählteAufgabe");
alert(solution);
