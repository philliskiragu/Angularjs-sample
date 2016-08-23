/**
* @Author: Phillis Kiragu <PKiragu>
* @Date:   2016-08-22T08:27:13+03:00
* @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-23T12:38:06+03:00
*/

// modules
// declaring a module
var myModule = angular.module('myApp', ['ngMessages']);

// configuring a module
myModule.filter('greet', function() {
 return function(item) {
    return 'Hello, ' + item + '!';
  };
});

// search names with given letter
myModule.filter('searchNames', function(){
  return function(items, letter){
    console.log("letter", String(letter));
    var names = []; // an empty array of names
    for (var i=0; i<=items.length; i++){
      if (items[i].startsWith(letter)){
        names.push(items[i]);
        console.log("items: ", items[i]);
      }
    }
    return names;
  };
});

myModule.filter('getNames', function() {
  return function(name){
    return 'great ' + name;
  };
});

myModule.controller('FilterController', ['nameFilter', function FilterController(nameFilter) {
  this.array = [
    {name: 'Phillis'},
    {name: 'William'},
    {name: 'Daniel'},
    {name: 'Kiragu'},

  ];
  this.filteredArray = nameFilter(this.array, 'p');
}]);

myModule.run(function($rootScope) {
    $rootScope.power = 'Mind reading';
});

myModule.controller('myCtrl', function($scope) {
    $scope.power='Vibing';
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
myModule.controller('myWatch', function($scope) {

    $scope.myVar = 1;

    $scope.$watch('myVar', function() {

        alert('hey, The value has changed!');
    });

    $scope.buttonClicked = function() {
        $scope.myVar = 2; // This will trigger $watch expression to kick in
    };
});
