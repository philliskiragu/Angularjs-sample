/**
 * @Author: Phillis Kiragu <PKiragu>
 * @Date:   2016-08-22T08:27:13+03:00
 * @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-25T10:48:50+03:00
 */

// modules
// declaring a module
// 'ngMessages',
var myModule = angular.module('myApp', ['ngMessages', 'ui.router']);

// configuring a module
myModule.filter('greet', function() {
  return function(item) {
    return 'Hello, ' + item + '!';
  };
});

// search names with given letter
myModule.filter('searchNames', function() {
  return function(items, letter) {
    console.log("letter", String(letter));
    var names = []; // an empty array of names
    for (var i = 0; i <= items.length; i++) {
      if (items[i].startsWith(letter)) {
        names.push(items[i]);
        console.log("items: ", items[i]);
      }
    }
    return names;
  };
});

myModule.filter('getNames', function() {
  return function(name) {
    return 'great ' + name;
  };
});


myModule.run(function($rootScope) {
  $rootScope.power = 'Mind reading';
});
// controller
myModule.controller('myCtrl', function($scope) {
  $scope.power = 'Vibing';
  $scope.names = [
    'Phillis',
    'Jani',
    'Carl',
    'Margareth',
    'Hege',
    'Joe',
    'Gustav',
    'Birgit',
    'Mary',
    'Kai'
  ];
});

// myModule.controller('myWatch', function($scope) {
//
//     $scope.myVar = 1;
//
//     "vm.myVar",
//     function handleVarChange( newValue, oldValue ) {
//         console.log( "vm.myVar:", newValue );
//     })
//
//     $scope.buttonClicked = function() {
//         $scope.myVar = 2; // This will trigger $watch expression to kick in
//     };
// });

myModule.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/day1");

  $stateProvider

    .state('day1', {
      url: '/day1',
      templateUrl: 'index.html'
    })
    .state('example', {
      url: '/theview',
      template: '<h3>I am a routed view</h3>',
      controller: "appCtrl"
    })

  .state('day2', {
    url: '/day2',
    templateUrl: 'day2.html'
  })

  // .state('day3', {
  //   url: '/day3',
  //   views: {
  //
  //     // the main template will be placed here (relatively named)
  //     '': {
  //       templateUrl: 'day3.html'
  //     },
  //
  //     // the child views will be defined here (absolutely named)
  //     'directives@day3': {
  //       templateUrl: 'directives.html'
  //     },
  //
  //     // for column two, we'll define a separate controller
  //     'services@day3': {
  //       templateUrl: 'service.html'
  //     }
  //   }
  //
  // })

  .state('day3', {
    url: '/day3',
    template: '<h2>day3</h2>'

  });
});

//Promises
//
myModule.controller('appCtrl', function($scope, $q){
  var defer = $q.defer();

  defer.promise
        .then (function(device){
          alert("I will give you my:" + device)
          return "Laptop"
        })
        .then(function(device){
          alert("And my:"+ device)
          return "Phone"
        })
        .then(function(device){
          alert("And my:"+ device)

        })
defer.resolve("Tablet");
});
