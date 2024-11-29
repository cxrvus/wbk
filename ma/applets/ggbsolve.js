appletCont = window.applet_container.firstChild.firstChild;
ggbBase64 = appletCont.getAttribute('data-param-ggbbase64');
applet = new GGBApplet({ggbBase64});
obj = applet.getAppletObject();

keys = ['strAuswertung1', 'ListeGewählteAufgabe', 'ListeLösungen'];
key = keys.find(x => obj.getValueString(x));
solution = key ? obj.getValueString(key) : 'could not find solution';
alert(solution);
