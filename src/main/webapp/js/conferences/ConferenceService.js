'use strict';

/**
 * Conferences Service.
 */
var ConferenceService = Class.extend({
	
	/**
	 * AngularJS REST service.
	 */
	restangular: null,
	
	/**
	 * Number of conferences returned by the service.
	 */
	NB_CONFERENCES: 50,
	
	/**
	 * Start index of the conferences returned by the service.
	 */
	_startIndex: 0,
	
	/**
	 * Defines start search index.
	 * 
	 * @param {int}
	 */
	setStartIndex: function(pIndex) {
		this._startIndex = pIndex;
	},
	
	/** Search criteria @returns {Conference} */
	_searchCriteria: null,
	
	setSearchCriteria :function(pCriteria) {
		this._searchCriteria = pCriteria;
	},
	
	/**
	 * Returns search criteria.
	 * 
	 * @returns {Conference}
	 */
	getSearchCriteria: function() {
		return this._searchCriteria;
	},
	
	/** Currently displayed conference @returns {Conference} */ 
	_selectedConference: null,
	
	/** Defines selected conference. @param {Conference} */
	setSelectedConference: function(pConference) {
		this._selectedConference = pConference;
	},
	
	/** Returns current conference @returns {Conference} */
	getSelectedConference: function() {
		return this._selectedConference;
	},
	
	/**
	 * Returns conferences.
	 * 
	 * @returns {Array}
	 */
	getConferences : function() {
		var queryParam = { start: this._startIndex, nb: this.NB_CONFERENCES };
		
		if (this._searchCriteria) {
			if (this._searchCriteria.title != null) {
				queryParam.title = this._searchCriteria.title;
			}
			if (this._searchCriteria.category != null) {
				queryParam.category = this._searchCriteria.category;
			}
			if (this._searchCriteria.room != null) {
				queryParam.room = this._searchCriteria.room;
			}
			if (this._searchCriteria.day != null) {
				queryParam.day = this._searchCriteria.day;
			}
		}
		
		return this.restangular.all("conferences").getList(queryParam).then(this._getConferences.bind(this), this.onError);
	},
	
	/**
	 * Handler on search service success.
	 */
	_getConferences : function(pResult) {
		this._startIndex += this.NB_CONFERENCES;
		return pResult;
	},
	
	/**
	 * Deletes the selected conference.
	 * 
	 * @param {Conference}
	 */
	deleteConference: function(pConference) {
		if (pConference != null) {
			return pConference.remove();
		}
		return null;
	},
	
	/**
	 * Updates the selected conference.
	 * 
	 * @param {Conference}
	 */
	updateConference: function(pConference) {
		if (pConference != null) {
			return pConference.post("update");
		}
		return null;
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
		$get : [ 'Restangular', function(restangular) {
			this.instance.restangular = restangular;

			return this.instance;
		} ]
	})

	/** Service registration */
	angular.module('conferences.ConferenceService', []).provider('ConferenceService', ConferenceServiceProvider);
}());