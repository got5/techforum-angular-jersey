var RouteService = Class.extend({
	
	_previousRoute: null,
	
	rootScope: null,
	
	listenToRouteChanges: function() {
		this.rootScope.$on('$routeChangeSuccess', this.onRouteChange.bind(this));
	},
	
	onRouteChange: function(currentRoute, previousRoute) {
		this._previousRoute = previousRoute;
	},
	
	getPreviousRoute: function() {
		return this._previousRoute;
	},
	
	getpreviousURL: function() {
		if (this._previousRoute != null) {
			
		}
		return '#';
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
		$get : [ '$rootScope', function($rootScope) {
			this.instance.rootScope = $rootScope;
			this.instance.listenToRouteChanges();
			
			return this.instance;
		} ]
	})

	/** Service registration */
	angular.module('services.RouteService', []).provider('RouteService', RouteServiceProvider);
}());