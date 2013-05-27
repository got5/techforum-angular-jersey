/** Search view controller. */
var SearchController = BaseController.extend({
	
	_location: null,
	
	/** @returns {ConferenceService} */
	_conferenceService: null,
	
	init : function($scope, $location, conferenceService) {
		this._location = $location;
		this._conferenceService = conferenceService;
		this._super($scope);
	},

	defineScope : function() {
		this._super();
		
		this.$scope.searchCriteria = new Conference();
		
		this.$scope.searchConferences = this.searchConferences.bind(this);
		this.$scope.resetCriteria = this.resetCriteria.bind(this);
	},
	
	/** Create search criteria and returns to conference page. */
	searchConferences: function(event) {
		event.preventDefault();
		this._conferenceService.setSearchCriteria(this.$scope.searchCriteria);
		this._location.path("/conferences");//.search(criteria); //Add param.
	},
	
	/** Reset search criteria. */
	resetCriteria: function(event) {
		event.preventDefault();
		this.$scope.searchCriteria = new Conference();
	}
});

SearchController.$inject = [ '$scope', '$location', 'ConferenceService' ];