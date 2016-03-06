var pageMod = require('sdk/page-mod');
var toggles = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var ss = require("sdk/simple-storage");

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
		"./js/location.js",
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
		worker.port.on('location',function(location){
			ss.storage.location = JSON.stringify(location);
		});
		worker.port.on('getStorage',function(key){
			worker.port.emit('storageResponse',ss.storage[key]);
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
  onHide: handleHide,
  	contentScriptFile: [
		"./vendor/jquery/jquery-1.12.1.js",
		"./vendor/underscore/underscore.js",
		"./js/services.js",
		"./js/location.js",
		"./js/popup.js"
	],
});

panel.port.on('getStorage',function(key){
	panel.port.emit('storageResponse',ss.storage[key]);
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