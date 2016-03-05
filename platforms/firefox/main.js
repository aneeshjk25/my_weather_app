var pageMod = require('sdk/page-mod');
var buttons = require('sdk/ui/button/action');

pageMod.PageMod({
	include	: '*',
	//contentScriptOptions: {
	//	rootUrl: "./"
	//},
	attachTo : ['top','existing'],
	contentScriptFile: [
		"./libs/jquery/jquery-1.12.1.js",
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

	var button = buttons.ActionButton({
	  id: "toolbar-link",
	  label: "Weather",
	  icon:  "./images/icon.png" ,
	  onClick: 	function handleClick(state) {
		console.log(arguments," arguments in handleClick");
	}});


