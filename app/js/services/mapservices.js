/*global define*/
define([
    'esri/layers/ArcGISDynamicMapServiceLayer',
    'esri/layers/ArcGISTiledMapServiceLayer'
], function(ArcGISDynamicMapServiceLayer, ArcGISTiledMapServiceLayer) {

    function loadServices() {
        var layers = [];
        layers.push (new ArcGISDynamicMapServiceLayer('https://maps.ngdc.noaa.gov/arcgis/rest/services/web_mercator/multibeam_dynamic/MapServer', {
            id: 'multibeam_dynamic'
        }));
        return layers;
    }

    return {
        loadServices: loadServices
    };
});
