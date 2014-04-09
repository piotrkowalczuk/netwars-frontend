angular.module('NWApp').filter('parseUrl', function() {
    return function(text, target) {
        return Autolinker.link(text, {truncate: 50, newWindow: false});
    };
});