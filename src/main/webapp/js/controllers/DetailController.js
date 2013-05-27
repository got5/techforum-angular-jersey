/**
 * Conference detail view controller.
 */
var DetailController = BaseController.extend({
	
	/** @returns {ConferenceService} */
	_conferenceService : null,
	
	/** @returns {ConferenceConstants} */
	_constants: null,
	
	_location: null,

	init : function($scope, $location, conferenceService, constants) {
		this._conferenceService = conferenceService;
		this._constants = constants;
		this._location = $location;
		this._super($scope);
	},

	defineScope : function() {
		this._super();
		
		this.$scope.currentConference = this._conferenceService.getSelectedConference();
		this.$scope.rooms = this._constants.ROOMS;
		this.$scope.days = this._constants.DAYS;
		this.$scope.categories = this._constants.CATEGORIES;
		
		if (this.$scope.currentConference == null) {
			console.log("[DEBUG] Error: Detail view without conference id.");
		}
		
		this.$scope.deleteConference = this.deleteConference.bind(this);
		this.$scope.onConferenceDeleted = this.onConferenceDeleted.bind(this);
		this.$scope.postConference = this.postConference.bind(this);
	},
	
	/** Deletes current conference. */
	deleteConference: function(event) {
		event.preventDefault();
		this._conferenceService.deleteConference(this.$scope.currentConference).then(this.onConferenceDeleted.bind(this));
	},
	
	/** Function called after the conference has been deleted. Redirects to list page. */
	onConferenceDeleted: function(pResult) {
		this._location.path('/conferences');
	},
	
	/** Updates the current conference. */
	postConference: function(event) {
		event.preventDefault();
		this._conferenceService.updateConference(this.$scope.currentConference).then(this.onConferenceUpdated.bind(this));
	},
	
	/** Function called after the conference has been updated. Redirects to list page. */
	onConferenceUpdated: function(pResult) {
		this._location.path('/conferences');
	}
});

//Used before: $routeParams to get conference id: $routeParams.id.
DetailController.$inject = [ '$scope', '$location', 'ConferenceService', 'ConferenceConstants' ];