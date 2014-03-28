var jsface = require('jsface');

/** 
 * @class Helpers
 * Helper class with useful methods used throughout Newman
 */
var Helpers = jsface.Class({
    $singleton: true,
    isValidUrl: function(url) {
        // basic sanity check to validate url structure 
        var result = url.match(/(https|http):\/\/([_a-z\d\-]+(\.[_a-z\d\-]+)+)(([_a-z\d\-\\\.\/]+[_a-z\d\-\\\/])+)*/);
        return result !== null;
    }
});

module.exports = Helpers;
