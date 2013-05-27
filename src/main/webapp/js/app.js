'use strict';

// Conferences dependencies
angular.module('techforum.conferences', [ 'conferences.ConferenceService', 'conferences.Constants' ]);

// Services dependencies
angular.module('techforum.services', [ 'services.RouteService' ]);

// Filters module
angular.module('techforum.filters', []);

// Application module
var application = angular.module(
		'techforum',
		[ 'techforum.conferences', 'techforum.services',
				'techforum.directives', 'techforum.filters', 'ui',
				'google-maps', 'localization', 'infinite-scroll', 'restangular' ]).config(
		[ '$routeProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/conferences', {
				templateUrl : 'partials/conferences.html',
				controller : ConferenceController
			}).when('/menu', {
				templateUrl : 'partials/menu.html',
				controller : MenuController
			}).when('/detail', {
				templateUrl : 'partials/detail.html',
				controller : DetailController
			}).when('/search', {
				templateUrl : 'partials/search.html',
				controller : SearchController
			}).when('/map', {
				templateUrl : 'partials/map.html',
				controller : MapController
			}).otherwise({
				redirectTo : '/menu'
			});
		} ]);

//Application configuration
application.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('/techforum/rest');
});