var myApp = angular.module('myApp', [
        'ngRoute',
        'ngResource'
])

// local host server must be created to run an angularjs project
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .when('/skills', {
            templateUrl: 'views/skills.html',
            controller: 'skillsController'
        })
        .when('/portfolio', {
            templateUrl: 'views/portfolio.html',
            controller: 'portfolioController'
        })
        .when('/blog', {
            templateUrl: 'views/blog.html',
            controller: 'blogController'
        })

})

// SERVICES
// weather
myApp.service('$weather', function () {
    this.city = "New York, NY"
})


// CONTROLLERS
myApp.controller('homeController', ['$scope', '$weather', function ($scope, $weather) {
    $scope.city = $weather.city
    $scope.$watch('city', function () {
         $weather.city = $scope.city
    })

}])

myApp.controller('aboutController', ['$scope', '$weather', function ($scope, $weather) {
    console.log('about page')
    $scope.city = $weather.city

}])
 
myApp.controller('skillsController', ['$scope', '$weather', function ($scope, $weather) {
    console.log('skills page')
    $scope.city = $weather.city

}])
 
myApp.controller('portfolioController', ['$scope', '$weather', function ($scope, $weather) {
    console.log('portfolio page')
    $scope.city = $weather.city

}])

myApp.controller('blogController', ['$scope', '$weather', function ($scope, $weather) {
    console.log('blog page')
    $scope.city = $weather.city

}])
