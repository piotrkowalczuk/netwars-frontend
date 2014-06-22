angular.module('NWApp').directive('parseUrl', function() {
    var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/gi;
    return {
        restrict: 'A',
        require: 'ngModel',
        replace: true,
        scope: { props: '=parseUrl', ngModel: '=ngModel' },
        link: function compile(scope, element) {
            scope.$watch('ngModel', function(value) {
                angular.forEach(value.match(urlPattern), function(url) {
                    value = value.replace(url, '<a target="' + scope.props.target + '" href='+ url + '>' + url + '</a>');
                });
                element.html(value + " | " + scope.props.otherProp);
            });
        }
    };
});