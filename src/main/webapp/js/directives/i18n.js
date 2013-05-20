'use strict';

var i18n = angular.module('I18n', []);

/*i18n.directive('i18n', function (I18N) {
    return {
        priority: 0,
        restrict: 'A',
        scope: false,
        compile: function compile(tElement, tAttrs, transclude) {
            if (tAttrs.i18n) {
                tElement.text(I18N.translate(tAttrs.i18n));
            }
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {},
                post: function postLink(scope, iElement, iAttrs, controller) {}
            };
        }
    };
});*/