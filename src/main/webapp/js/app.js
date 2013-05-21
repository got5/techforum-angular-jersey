'use strict';

// Conferences dependencies
angular.module('techforum.conferences', [ 'conferences.ConferenceService' ]);

// Services dependencies
angular.module('techforum.services', [ 'services.RouteService' ]);

// Filters module
angular.module('techforum.filters', []);

// Application module
angular.module(
		'techforum',
		[ 'techforum.conferences', 'techforum.services',
				'techforum.directives', 'techforum.filters', 'ui',
				'google-maps', 'localization', 'infinite-scroll' ]).config(
		[ '$routeProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/conferences', {
				templateUrl : 'partials/conferences.html',
				controller : ConferenceController
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
				redirectTo : '/conferences'
			});
		} ]);
