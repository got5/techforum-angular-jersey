/**
 * Application header toolbar controller.
 */
var HeaderBarController = BaseController.extend({
	
	_routeService: null,
	
	init : function($scope, routeService) {
		this._super($scope);
		this._routeService = routeService;
	},

	defineScope : function() {
		this._super();
		
		this.$scope.hasPreviousPage = this.hasPreviousPage.bind(this);
		this.$scope.gotoPreviousPage = this.gotoPreviousPage.bind(this);
	},
	
	hasPreviousPage: function() {
		return this._routeService.getPreviousRoute() != null;
	},
	
	/**
	 * Returns to previous page, if any.
	 */
	gotoPreviousPage: function($event) {
		//Prevent default link redirection.
		$event.preventDefault();
		
		this._routeService.gotoPreviousPage();
	}
});

/**
 * Application header toolbar directive.
 */
directives.directive('headerbar', ['RouteService', function(routeService) {
	return {
		restrict : 'E',
		templateUrl : 'js/directives/templates/headerbar.html',
		replace : true,
		transclude : true, //Add directive children.
		scope: {
			title: "@viewTitle" //Link $scope.title to view-title attribute.
		},
		link : function($scope, $elm, $attrs) {
			//Directive controller.
			new HeaderBarController($scope, routeService);
		},
	}
}]);
