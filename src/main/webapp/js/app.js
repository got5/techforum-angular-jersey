'use strict';

//Conferences dependencies
angular.module('techforum.conferences', [ 'conferences.ConferenceService' ]);

// Filters module
angular.module('techforum.filters', []);

// Application module
angular.module(
		'techforum',
		[ 'techforum.conferences', 'techforum.directives', 'techforum.filters', 'google-maps', 'infinite-scroll' ]).config(
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
