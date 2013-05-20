/**
 * Application controller.
 */
var AppController = BaseController.extend({
	
	init : function($scope) {
		
		this._super($scope);
	},
	
	defineScope: function() {
		
		this._super();
	}
});

AppController.$inject = ['$scope'];