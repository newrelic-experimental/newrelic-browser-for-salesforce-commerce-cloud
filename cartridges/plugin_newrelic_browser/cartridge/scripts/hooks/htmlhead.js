var ISML = require('dw/template/ISML');

/**
 * Implements the html head hook to allow adding global javascript for service worker and partial cache gathering
 */
function htmlHead() {
    ISML.renderTemplate('newrelic_browser');
    ISML.path
}

module.exports = {
    htmlHead: htmlHead
};
