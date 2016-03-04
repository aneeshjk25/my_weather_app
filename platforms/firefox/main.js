var pageMod = require('sdk/page-mod');

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
	contentScriptWhen: 'start'
});