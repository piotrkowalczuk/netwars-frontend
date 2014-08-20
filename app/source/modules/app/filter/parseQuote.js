angular.module('NWApp').filter('parseQuote', function() {
    return function(text, posts) {
        var groupRegExp = /\[#([0-9]+)\]/ig;

        while (match = groupRegExp.exec(text)) {
            var postNumber = match[1];
            var postIndex = postNumber-1;
            var regexp = new RegExp("(\\[#"+postNumber+"\\])", 'ig');

            var html = '<div class="nw-quote">';
            html += '<div class="nw-quote-header"><strong>'+posts[postIndex].authorName+'</strong> napisał w poście #'+postNumber+'</div>';
            html += '<div class="nw-quote-body">'+posts[postIndex].content+'</div>';
            html += '</div>';

            text = text.replace(regexp, html);
        }

        return text;
    };
});