/**
 * Map view controller.
 */
var MapController = BaseController.extend({
	
	init : function($scope) {
		
		this._super($scope);
	},
	
	defineScope: function() {
		
		this._super();
	}
});

MapController.$inject = ['$scope'];