angular.module('NWApp').directive('scrollIf', function () {
    return function (scope, element, attributes) {
        setTimeout(function () {
            if (scope.$eval(attributes.scrollIf)) {
                window.scrollTo(0, element[0].offsetTop - 200 + window.innerHeight)
            }
        });
    }
});