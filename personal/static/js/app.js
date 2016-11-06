var app = angular.module("djangoApp", ['ngRoute', 'ngMaterial'])
app.config(function($interpolateProvider, $routeProvider, $locationProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when('/contact/', {
        templateUrl: 'basic.html'
    })
    $locationProvider.html5Mode(true);
    console.log("Here")
});
