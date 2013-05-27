/**
 * Application controller. Can be used to store global variables or to handle
 * common treatments.
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