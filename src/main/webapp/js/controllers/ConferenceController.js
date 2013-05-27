/**
 * Conferences list page controller.
 */
var ConferenceController = BaseController.extend({
	
	/** Conferences service @return {ConferenceService} */
	_conferenceService: null,
	
	$location: null,
	
	/**
	 * Constructor
	 * 
	 * @param $scope
	 * @param $location
	 * @param {ConferenceService} conferenceService
	 * @param {RouteService} routeService
	 */
	init : function($scope, $location, conferenceService, routeService) {
		this._conferenceService = conferenceService;
		this.$location = $location;
		
		//Search start index reset to 0.
		this._conferenceService.setStartIndex(0);
		
		//No back button.
		routeService.resetPreviousRoute();
		
		this._super($scope);
	},
	
	defineScope: function() {
		this._super();
		
		this.$scope.conferences = [];
		this.$scope.nextPage = this.nextPage.bind(this);
		
		this.$scope.showDetail = this.showDetail.bind(this);
	},
	
	/** Search for further conferences. */
	nextPage: function() {
		if (this.$scope.busy) {
			return;
		}
		this.$scope.busy = true;
		
		this._conferenceService.getConferences().then(this.onNextPageDone.bind(this));
	},
	
	/**
	 * Handler on search service success.
	 * 
	 * @param {Array}
	 */
	onNextPageDone: function(pConferences) {
		if (pConferences != null) {
			//New conferences are added to the current ones.
			for (var index = 0; index < pConferences.length; index++) {
				this.$scope.conferences.push(pConferences[index]);
			}
		}
		
		//No more results returned by the service: no need to call the service again.
		if (pConferences.length == this._conferenceService.NB_CONFERENCES) {
			this.$scope.busy = false;
		}
	},
	
	/**
	 * Goto detail page.
	 * 
	 * @param {Conference}
	 */
	showDetail: function(pConference) {
		this._conferenceService.setSelectedConference(pConference);
		this.$location.path("/detail");//.search({"id": pConference.id});
	},
});

ConferenceController.$inject = ['$scope', '$location', 'ConferenceService', 'RouteService'];