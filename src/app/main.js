/**
 * This file is the application's main JavaScript file. It is listed as a dependency in index.html and will
 * automatically load when index.html loads.
 *
 * Because this file has the special filename `main.js`, and because we've registered the `app` package in run.js,
 * whatever object this module returns can be loaded by other files simply by requiring `app` (instead of `app/main`).
 *
 * Our first dependency, `./Dialog`, uses a relative module identifier; you should use this type of notation for
 * dependencies *within* a package in order to ensure the package is fully portable. It works like a path, where `./`
 * refers to the current directory and `../` refers to the parent directory. If you are referring to a module in a
 * *different* package (like `dojo` or `dijit`), you should *not* use a relative module identifier.
 *
 * The second dependency is a plugin dependency; in this case, it is a dependency on the special functionality of the
 * `dojo/domReady` plugin, which simply waits until the DOM is ready before resolving. The `!` after the module name
 * indicates you want to use special plugin functionality; if you were to require just `dojo/domReady`, it would load
 * that module just like any other module, without the special plugin functionality. Note that this is just an example
 * to show how plugins work; because our scripts are loaded before `</body>` in index.html, we don’t need to wait for
 * DOM ready; it will already be ready.
 *
 * In all cases, whatever function is passed to define() is only invoked once, and the returned value is cached.
 *
 * More information about everything described about the loader throughout this file can be found at
 * <http://dojotoolkit.org/reference-guide/loader/amd.html>.
 */
define(['esri/map', 'esri/dijit/Search', 'esri/layers/FeatureLayer', 'esri/InfoTemplate', 'esri/SpatialReference', 'esri/geometry/Extent', 'dojo/domReady!'],
  function(Map, Search, FeatureLayer, InfoTemplate, SpatialReference, Extent) {
    var app = {};

    // Create a new instance of our custom Dijit dialog and place it in the DOM
    app.map = new Map('map', {
      basemap: 'gray',
      center: [-97, 38], // lon, lat
      zoom: 5
        //sliderStyle: 'small'
    });

    app.s = new Search({
      enableButtonMode: true, //this enables the search widget to display as a single button
      enableLabel: false,
      enableInfoWindow: true,
      showInfoWindowOnSelect: false,
      map: app.map
    }, 'search');

    var sources = app.s.get('sources');

    //Push the sources used to search, by default the ArcGIS Online World geocoder is included. In addition there is a feature layer of US congressional districts. The districts search is set up to find the 'DISTRICTID'. Also, a feature layer of senator information is set up to find based on the senator name. 

    sources.push({
      featureLayer: new FeatureLayer('http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CongressionalDistricts/FeatureServer/0'),
      searchFields: ['DISTRICTID'],
      displayField: 'DISTRICTID',
      exactMatch: false,
      outFields: ['DISTRICTID', 'NAME', 'PARTY'],
      name: 'Congressional Districts',
      placeholder: '3708',
      maxResults: 6,
      maxSuggestions: 6,

      //Create an InfoTemplate and include three fields
      infoTemplate: new InfoTemplate('Congressional District', 'District ID: ${DISTRICTID}</br>Name: ${NAME}</br>Party Affiliation: ${PARTY}'),
      enableSuggestions: true,
      minCharacters: 0
    });

    sources.push({
      featureLayer: new FeatureLayer('http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_Senators/FeatureServer/0'),
      searchFields: ['Name'],
      displayField: 'Name',
      exactMatch: false,
      name: 'Senator',
      outFields: ['*'],
      placeholder: 'Senator name',
      maxResults: 6,
      maxSuggestions: 6,

      //Create an InfoTemplate

      infoTemplate: new InfoTemplate('Senator information', 'Name: ${Name}</br>State: ${State}</br>Party Affiliation: ${Party}</br>Phone No: ${Phone_Number}<br><a href="${Web_Page}" target=_"blank">Website</a>'),

      enableSuggestions: true,
      minCharacters: 0
    });

    //Set the sources above to the search widget
    app.s.set('sources', sources);

    app.s.startup();



    // TODO: remove?
    // Now that the app is loaded, we'll add an extra CSS class to the body to hide the loading message. Note that we
    // could also have used `dojo/dom-class` to do this, but for very simple one-off operations like these there is
    // usually no good reason to load an extra module.
    document.body.className += ' loaded';

    // Returning a value from an AMD module means that it becomes the value of the module. In this case, we return
    // the `app` object, which means that other parts of the application that require `app/main` could get a reference
    // to the dialog
    return app;
  });