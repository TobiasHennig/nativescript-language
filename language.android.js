var application = require('application');
var context = application.android.context;
var ressources = context.getResources();

function getIdentifier(name, type) {
    return ressources.getIdentifier(name, type, context.getPackageName());
}

module.exports = {
    // String
    getString: function(name) {
        return ressources.getString(getIdentifier(name, 'string'));
    },

    // String array
    getStringArray: function(name) {
        return Array.prototype.slice.call(ressources.getStringArray(getIdentifier(name, 'array')));
    },

    // Plurals
    getQuantityString: function(name, quantity) {
        return ressources.getQuantityString(getIdentifier(name, 'plurals'), quantity);
    }
};
