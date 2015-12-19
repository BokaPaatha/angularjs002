// Create the application. You will need ngRoute to route for different pages. 
var mySPA = angular.module('mySPA', [ 'ngRoute' ]);

// Ugly way of telling which page to pick. 
mySPA.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'SPA001MainFragment.html',
		controller : "homePageCtrl"
	}).when('/first', {
		templateUrl : 'SPA001MainFragment.html',
		controller : "homePageCtrl"

	}).when('/second', {
		templateUrl : 'SPA001MainFragment.html',
		controller : "homePageCtrl"

	}).when('/third', {
		templateUrl : 'SPA001MainFragment.html',
		controller : "homePageCtrl"

	})
});

// Just some controllers. Do some tasks. 
mySPA.controller('mainCtrl', [ '$scope', '$location', '$log',
		function($scope, $location, $log) {
			$log.info($location.path());
		} ]);

mySPA.controller('homePageCtrl', [ '$scope', function($scope) {
	$scope.content = "Hello world from SPA" ; 
	console.log('I am at the page controller.'); 
} ]);