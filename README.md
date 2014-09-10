#esri-slurp-example

The purpose of this repo is to show how to do a Dojo build with Esri JSAPI source code downloaded using [grunt-esri-slurp](https://www.npmjs.org/package/grunt-esri-slurp). The build profile and grunt configuration draw heavily from the [AGRC JavaScript Project Boilerplate](https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate), which is itself based on the [Dojo Boilerplate](https://github.com/csnover/dojo-boilerplate). However, this configurations in this repo are pared down to demonstrate only what is necessary to create a custom Dojo build of a simple app featuring an Esri map (based on the [Create a map sample page](https://developers.arcgis.com/javascript/jssamples/map_simple.html)).

##Instructions
You must have [Node.js](http://nodejs.org/) installed as well as the [Grunt CLI](http://gruntjs.com/getting-started).

Install Grunt tasks with npm:
```
npm install
```

Download Dojo and other dependencies with bower:
```
bower install
```

Download the AMD build of the ArcGIS API for JavaScript with [grunt-esri-slurp](https://www.npmjs.org/package/grunt-esri-slurp):
```
grunt slurp
```

Load the unbuilt app in a browser to verify that it works and that all dependencies are in place.

Build the app:
```
grunt build
```

Load the built app in a browser to verify that it works. Inspect network traffic to verify that the build version of the app requests fewer and smaller scripts.

##Resources
- [grunt-esri-slurp](https://www.npmjs.org/package/grunt-esri-slurp)
- [AGRC JavaScript Project Boilerplate](https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate)
- [Dojo Boilerplate](https://github.com/csnover/dojo-boilerplate)
- [Dojo Build Tutorial](http://dojotoolkit.org/documentation/tutorials/1.9/build/)
- [Dojo Build Reference Guide](http://dojotoolkit.org/reference-guide/1.9/build/index.html)
- [ArcGIS API for JavaScript Compact Build](https://developers.arcgis.com/javascript/jshelp/inside_compactbuild.html)
