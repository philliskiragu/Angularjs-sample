/**
 * @Author: Phillis Kiragu <PKiragu>
 * @Date:   2016-08-23T11:26:10+03:00
 * @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-24T09:30:55+03:00
 */



var app = angular.module("myApp", ['ui-router']);
// custom directive
app.directive("myTestDirective", function() {
  return {
    restrict: "EACM",
    template: "<h1>My Test directive!</h1>",
    scope: "=name",
    compile: function(element, attributes) {
      element.css("border", "1px solid #000000");
    },


  };
});
app.directive("myCommentInvokedDirective", function() {
  return {
    restrict: "M",
    replace: true,
    template: "<h1>My Comment Invoked directive!</h1>"
  };
});
app.directive("myTest1Directive", function() {
  return {
    restrict: "EACM",
    templateUrl: 'text1.html',
    controller: ['myController', function($scope) {
      $scope.frameworks = ['angular', 'node', 'ember'];
    }],
    // use link if compile is not defined
    link: function(scope, element, attr) {
      element.append("<strong>" + attr.title + "</strong>");
    }
  };
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/index");
  $stateProvider
    .state('contacts', {
      template: '<h1>My Contacts</h1>'
    })

    .state('home', {
      url: '/home',
      templateUrl:  'directives.html'
    })

    .state('services',{
      url: '/services',
      templateUrl:  'service.html'
    });
});
