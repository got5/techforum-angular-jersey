var RouteService = Class.extend({
	
	_previousRoute: null,
	
	rootScope: null,
	
	location: null,
	
	listenToRouteChanges: function() {
		this.rootScope.$on('$routeChangeSuccess', this.onRouteChange.bind(this));
	},
	
	onRouteChange: function(currentRoute, previousRoute) {
		this._previousRoute = previousRoute;
	},
	
	getPreviousRoute: function() {
		return this._previousRoute;
	},
	
	gotoPreviousPage: function() {
		if (this._previousRoute != null) {
			//this.location.path();
		}
	}
});

(function() {

	/**
	 * RouteService provider. Initialize and return a service instance.
	 * 
	 * @type {*}
	 */
	var RouteServiceProvider = Class.extend({

		instance : new RouteService(),

		/**
		 * Initialize and configure RouteService.
		 * 
		 * @return RouteService
		 */
		$get : [ '$rootScope', '$location', function($rootScope, $location) {
			this.instance.rootScope = $rootScope;
			this.instance.location = $location;
			this.instance.listenToRouteChanges();
			
			return this.instance;
		} ]
	})

	/** Service registration */
	angular.module('services.RouteService', []).provider('RouteService', RouteServiceProvider);
}());