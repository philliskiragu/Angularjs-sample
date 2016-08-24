/**
* @Author: Phillis Kiragu <PKiragu>
* @Date:   2016-08-23T17:06:51+03:00
* @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-23T17:18:57+03:00
*/



var app = angular.module("myApp", []);

mainApp.service('CalcService', function(MathService){
   this.square = function(a) {
      return MathService.multiply(a,a);
   };
});

mainApp.factory('MathService', function() {
   var factory = {};

   factory.multiply = function(a, b) {
      return a * b;
   };

   return factory;
});

mainApp.controller('CalcController', function($scope, CalcService) {
            $scope.square = function() {
               $scope.result = CalcService.square($scope.number);
            };
    });
