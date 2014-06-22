angular.module('NWApp').filter('parseQuote', function() {
    return function(text, posts) {
        var groupRegExp = /\[#([0-9]+)\]/ig;

        while (match = groupRegExp.exec(text)) {
            var postNumber = match[1];
            var regexp = new RegExp("(\\[#"+postNumber+"\\])", 'ig');
            var html = '<div>'+posts[postNumber-1].content+'</div>';

            text = text.replace(regexp, html);
        }

        return text;
    };
});