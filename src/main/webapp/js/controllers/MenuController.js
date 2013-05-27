/**
 * Main menu view controller.
 */
var MenuController = BaseController.extend({
	
	init : function($scope) {
		
		this._super($scope);
	},
	
	defineScope: function() {
		
		this._super();
	}
});

MenuController.$inject = ['$scope'];