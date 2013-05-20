/**
 * Application header toolbar controller.
 */
var HeaderBarController = BaseController.extend({

	init : function($scope) {
		this._super($scope);
	},

	defineScope : function() {
		this._super();
		
		this.$scope.pageTitle = "test";
	}
});

directives.directive('headerbar', function() {

	return {
		restrict : 'E',
		templateUrl : 'js/directives/templates/headerbar.html',
		replace : true,
		link : function($scope, $elm, $attrs) {
			new HeaderBarController($scope);
		},
		scope : true
	}
});
