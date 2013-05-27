var ConferenceConstants = Class.extend({
	
	/** Conference available rooms */
	ROOMS : [ 'R1', 'R2', 'R3', 'R4' ],
	
	/** Conference days */
	DAYS: [ 'D1', 'D2'],
	
	/** Conference categories */
	CATEGORIES: [ 'Conference', 'Demo', 'Poster' ]
});

angular.module('conferences.Constants', []).value('ConferenceConstants', new ConferenceConstants());