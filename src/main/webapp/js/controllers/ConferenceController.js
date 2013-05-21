/**
 * Conferences list page controller.
 */
var ConferenceController = BaseController.extend({
	
	_conferenceService: null,
	
	$location: null,
	
	init : function($scope, conferenceService, $location) {
		this._conferenceService = conferenceService;
		this.$location = $location;
		
		this._super($scope);
	},
	
	defineScope: function() {
		this._super();
		
		this.$scope.conferences = [];
		this.$scope.nextPage = this.nextPage.bind(this);
		
		this.$scope.showDetail = this.showDetail.bind(this);
	},
	
	nextPage: function() {
		
		if (this.$scope.busy) {
			return;
		}
		this.$scope.busy = true;
		
		this._conferenceService.getConferences().then(this.onNextPageDone.bind(this));
	},
	
	onNextPageDone: function(pConferences) {
		for (var index = 0; index < pConferences.length; index++) {
			this.$scope.conferences.push(pConferences[index]);
		}
		
		//No more results returned by the service: no need to call the service again.
		if (pConferences.length == this._conferenceService.NB_CONFERENCES) {
			this.$scope.busy = false;
		}
	},
	
	showDetail: function(pConference) {
		this.$location.path("/detail").search({"id": pConference.id});
	}
});

ConferenceController.$inject = ['$scope', 'ConferenceService', '$location'];