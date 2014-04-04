angular.module('NWApp').filter('newLine', function() {
    return function(text) {
        return text.replace(/\n/g, '<br/>');
    }
});