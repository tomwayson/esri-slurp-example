#esri-slurp-example

The purpose of this repo is to show how to do a Dojo build with Esri JSAPI source code downloaded using [grunt-esri-slurp](https://www.npmjs.org/package/grunt-esri-slurp). The build profile and grunt configuration draw heavily from the [AGRC JavaScript Project Boilerplate](https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate), which is itself based on the [Dojo Boilerplate](https://github.com/csnover/dojo-boilerplate). However, the configurations in this repo are pared down to demonstrate only what is necessary to create a custom Dojo build of a simple "app" featuring an Esri map (based on the [Create a map sample page](https://developers.arcgis.com/javascript/jssamples/map_simple.html)).

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

##Comparing Build Output
In order to determine if our build improves the user experience, we need to verify that the built page makes fewer script requests and that the size of the scripts requested is smaller than the unbuilt version of the page. We also need to verify the same as compared to similar pages that reference the [standard and compact CDN hosted builds of the API](https://developers.arcgis.com/javascript/jshelp/inside_compactbuild.html). The "app" in this example is based on the [Create a map sample page](https://developers.arcgis.com/javascript/jssamples/map_simple.html), and for convenience, this repo includes a copy of that page as well as a copy that uses the compact build (under the `samples` folder).

I've compiled a comparison of the file requests and sizes between the different builds in [a Google Spreadsheet](http://bit.ly/1p733Q7). The results show that (for this simple example at least) that there's a significant improvement over an unbuilt app (no surprise), and marginal improvements over the CDN builds. I would expect that you would see more benefit for more complicated apps with many modules.

##Resources
- [grunt-esri-slurp](https://www.npmjs.org/package/grunt-esri-slurp)
- [AGRC JavaScript Project Boilerplate](https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate)
- [Dojo Boilerplate](https://github.com/csnover/dojo-boilerplate)
- [Dojo Build Tutorial](http://dojotoolkit.org/documentation/tutorials/1.9/build/)
- [Dojo Build Reference Guide](http://dojotoolkit.org/reference-guide/1.9/build/index.html)
- [ArcGIS API for JavaScript Compact Build](https://developers.arcgis.com/javascript/jshelp/inside_compactbuild.html)

##Credit
There's nothging new here. The hard work has already been done by the estimable [@steveoh](https://github.com/steveoh) and [@stdavis](https://github.com/stdavis). This is just an attempt to make the great work that they've already done a bit more approachable (even though [they mock me](https://github.com/tomwayson/esri-slurp-example/issues/2#issuecomment-55122452)).
