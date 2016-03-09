# Weather browser extension #

The browser extension has been written for chrome and firefox. Extension for chrome is complete. 


### How do I get set up? ###

* You will need to install nodejs and ruby (for sass)
* After installing node please run
~~~~
npm install
~~~~

### Chrome Build Instructions ###

* Extension for chrome is complete and working
* Run the follwing command to build chrome extension
~~~~
gulp build-chrome
~~~~
* The extension is built at `./build/chrome`
* In chrome extension page , open this folder to load the extension

### Firefox Build Instructions ###

* Extension for firefox is incomplete, but a working extension with subset of the features is present at a earlier commit.
* To build it run the following commands
~~~~
git checkout 39084c8dc5b04b8fbd784b976b9c22c31750ddd5
gulp build-firefox
gulp firefox-dist
~~~~
* The above step will create a xpi file at build/firefox
* Load the xpi file into firefox from the addons page
* Download the above firefox extension from here https://www.dropbox.com/s/sfs4vwulcd6rcfv/my_weather_app-1.0.3-fx.xpi?dl=1