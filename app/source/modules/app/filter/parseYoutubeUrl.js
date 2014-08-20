angular.module('NWApp').filter('parseYoutubeUrl', function() {
    return function(text, target) {
        var yturl= /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([\w\-]{10,12})(?:&feature=related)?(?:[\w\-]{0})?/g;
        var ytplayer= '<div class="embed-responsive embed-responsive-16by9">' +
            '<iframe class="embed-responsive-item" src="http://www.youtube.com/embed/$1" allowfullscreen>' +
            '</iframe>' +
            '</div>';



        return text.replace(yturl, ytplayer);
    };
});