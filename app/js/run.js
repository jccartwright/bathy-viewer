/*global define, require, location*/
/*jshint */
(function () {
    'use strict';

    var pathRX = new RegExp(/\/[^\/]+$/),
        locationPath = location.pathname.replace(pathRX, '');

    require({
        async: true,
        aliases: [
            ['text', 'dojo/text']
        ],
        packages: [{
            name: "ngdc",
            location: 'https://maps.ngdc.noaa.gov/viewers/dijits-2.11/js/ngdc'
            //location: location.pathname.replace(pathRX, '') + '/js/ngdc'
        }, {
            name: "ncei",
            location: 'https://maps.ngdc.noaa.gov/viewers/dijits-2.11/js/ncei'
            //location: location.pathname.replace(pathRX, '') + '/js/ncei'
        }, {
            name: 'controllers',
            location: locationPath + '/js/controllers'
        }, {
            name: 'services',
            location: locationPath + '/js/services'
        }, {
            name: 'utils',
            location: locationPath + '/js/utils'
        }, {
            name: 'widgets',
            location: locationPath + '/js/widgets'
        }, {
            name: 'app',
            location: locationPath + '/js'
        }]
    }, ['app'], function() {
        console.debug('DEBUG: Dojo loader has finished...');
    });
})();
