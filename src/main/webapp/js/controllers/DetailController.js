var DetailController = BaseController.extend({

	_conferenceService : null,

	_currentConferenceId : null,

	init : function($scope, conferenceService, $routeParams) {
		this._conferenceService = conferenceService;
		
		if ($routeParams.id != undefined) {
			this._currentConferenceId = $routeParams.id;
		} else {
			console.log("[DEBUG] Error: Detail view without conference id.");
		}
		
		this._super($scope);
	},

	defineScope : function() {
		this._super();
		this._conferenceService.getConference(this._currentConferenceId).then(this.onSuccessFromGetConference.bind(this));
	},
	
	onSuccessFromGetConference: function(pConference) {
		this.$scope.currentConference = pConference;
	}
});

DetailController.$inject = [ '$scope', 'ConferenceService', '$routeParams' ];