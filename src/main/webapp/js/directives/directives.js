var directives = angular.module('techforum.directives', []);

/**
 * Directive used to catch touch event on mobile devices.
 */
directives.directive('ngTap', function() {
	var isTouchDevice = !!("ontouchstart" in window);
	return function(scope, elm, attrs) {
		if (isTouchDevice) {
			var tapping = false;
			elm.bind('touchstart', function() {
				tapping = true;
			});
			elm.bind('touchmove', function() {
				tapping = false;
			});
			elm.bind('touchend', function() {
				tapping && scope.$apply(attrs.ngTap);
			});
		} else {
			elm.bind('click', function() {
				scope.$apply(attrs.ngTap);
			});
		}
	}
});