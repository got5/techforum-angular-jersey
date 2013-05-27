/**
 * Service used to manage user navigation history.
 */
var RouteService = Class.extend({
	
	_previousRoute: null,
	
	rootScope: null,
	
	window: null,
	
	listenToRouteChanges: function() {
		this.rootScope.$on('$routeChangeSuccess', this.onRouteChange.bind(this));
	},
	
	/**
	 * Handler on route change.
	 */
	onRouteChange: function(currentRoute, previousRoute) {
		this._previousRoute = previousRoute;
	},
	
	/**
	 * Returns previous displayed route.
	 */
	getPreviousRoute: function() {
		return this._previousRoute;
	},
	
	/**
	 * Resets previous route.
	 */
	resetPreviousRoute: function() {
		this._previousRoute = null;
	},
	
	/**
	 * Returns to previous page.
	 */
	gotoPreviousPage: function() {
		if (this._previousRoute != null) {
			//TODO: build URL from previousRoute? And location.path?
			this.window.history.back();
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
		$get : [ '$rootScope', '$window', function($rootScope, $window) {
			this.instance.rootScope = $rootScope;
			this.instance.window = $window;
			this.instance.listenToRouteChanges();
			
			return this.instance;
		} ]
	})

	/** Service registration */
	angular.module('services.RouteService', []).provider('RouteService', RouteServiceProvider);
}());