'use strict';

directives.directive('tagManager', function() {
    return {
        restrict: 'E', //restricted to element-name.
        templateUrl: 'js/directives/templates/tagManager.html',
        //Called after the template has been loaded.
        link: function ($scope, $element) {
        	//Listen Enter key press on the text field.
            var inputTag = angular.element($element.find('#inputTag'));
            inputTag.bind('keypress', function (pEvent) {
                if (pEvent.keyCode == 13 && $scope.newTag != "") {
                	$scope.$apply($scope.addTag);
                }
            });
            
            //Remove a tag from the tags list.
            $scope.removeTag = function (pIdTag) {
                $scope.tags.splice(pIdTag, 1);
            };
            
            //Add a new tag to the list.
            $scope.addTag = function() {
            	if ($scope.newTag != "") {
            		$scope.tags.push($scope.newTag);
            		$scope.newTag = "";
            	}
            }
        }
    };
});