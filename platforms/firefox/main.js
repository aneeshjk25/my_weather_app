var pageMod = require('sdk/page-mod');
var toggles = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");

pageMod.PageMod({
	include	: '*',
	//contentScriptOptions: {
	//	rootUrl: "./"
	//},
	attachTo : ['top','existing'],
	contentScriptFile: [
		"./vendor/jquery/jquery-1.12.1.js",
		"./vendor/underscore/underscore.js",
		"./js/browser.js",
		"./js/services.js",
		"./js/main.js"
	],
	contentStyleFile: [
		"./css/main.css"
	],
	contentScriptWhen: 'start',
	onAttach : function(worker){
		worker.port.on('iconChange',function(path){
			button.icon = "./" + path;
		});
		worker.port.on("titleChange",function(title){
			button.label = title;
		});
	}
});

var button = toggles.ToggleButton({
  id: "toolbar-link",
  label: "Weather",
  icon:  "./images/icon.png" ,
  onChange : handleChange
  });


var panel = panels.Panel({
  contentURL: "./html/index.html",
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}