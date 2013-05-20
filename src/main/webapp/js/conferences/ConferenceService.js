'use strict';

/**
 * Conferences Service.
 */
var ConferenceService = Class.extend({
	
	/**
	 * Base REST services URL.
	 */
	BASE_URL : 'http://localhost:8080/techforum/rest/conferences',
	
	/**
	 * Returns all conferences.
	 * 
	 * @returns {Array}
	 */
	getConferences : function() {
		return this.$http.get(this.BASE_URL).success(
				this.onSuccess).error(this.onError).then(this._getConferences);
	},

	_getConferences : function(pResult) {
		if (pResult != null && pResult.data != null) {
			return pResult.data.conference;
		}
		return null;
	},
	
	/**
	 * Returns conference with id equals to pId.
	 * 
	 * @returns {Conference}
	 */
	getConference : function(pId) {
		return this.$http.get(this.BASE_URL + "/id/" + pId).success(
				this.onSuccess).error(this.onError).then(this._getConference);
	},
	
	_getConference: function(pResult) {
		return pResult.data;
	},
	
	onSuccess : function(response) {
		console.log("[DEBUG] Success call to ConferenceService.");
	},

	onError : function(response) {
		console.log("[DEBUG] Error on ConferenceService.");
	}
});

(function() {

	/**
	 * ConferenceService provider. Initialize and return a service instance.
	 * 
	 * @type {*}
	 */
	var ConferenceServiceProvider = Class.extend({

		instance : new ConferenceService(),

		/**
		 * Initialize and configure ConferenceService.
		 * 
		 * @return ConferenceService
		 */
		$get : [ '$http', function($http) {
			this.instance.$http = $http;

			return this.instance;
		} ]
	})

	/** Service registration */
	angular.module('conferences.ConferenceService', []).provider(
			'ConferenceService', ConferenceServiceProvider);
}());