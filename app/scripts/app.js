/**
 * @author Admin
 */
var myApp=angular.module('myApp',[
	'ngRoute',
	'myAppControllers',
	'ngAnimate',
	'ngTouch'
	]);

myApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when("/app",{
			templateUrl: 'partials/form.html',
			controller: 'formCtrl'
		}).
		when("/phonelist",{
			templateUrl: 'partials/phonelist.html',
			controller: 'phoneListCtrl'
		}).
		when("/phone/:phoneId",{
			templateUrl: 'partials/phonedetail.html',
			controller: 'phoneDetailCtrl'
		}).
		otherwise({
			redirectTo: '/app'
		});
	}]);
