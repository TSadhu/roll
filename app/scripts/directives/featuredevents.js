'use strict';

/**
 * @ngdoc directive
 * @name rollApp.directive:featuredevents
 * @description
 * # featuredevents
 */
angular.module('rollApp')
  .directive('featuredevents', function ($rootScope) {
    return {
      templateUrl: $rootScope.baseUrl+'/app/views/partials/featured_events.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
