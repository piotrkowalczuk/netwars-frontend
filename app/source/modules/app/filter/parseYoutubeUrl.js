angular.module('NWApp').filter('parseYoutubeUrl', function() {
    return function(text, target) {
        var yturl= /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([\w\-]{10,12})(?:&feature=related)?(?:[\w\-]{0})?/g;
        var ytplayer= '<div class="embed-container"><iframe width="640" height="360" src="http://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe></div>';

        return text.replace(yturl, ytplayer);
    };
});