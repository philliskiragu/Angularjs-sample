/**
* @Author: Phillis Kiragu <PKiragu>
* @Date:   2016-08-23T11:26:10+03:00
* @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-23T12:12:47+03:00
*/



var app = angular.module("myApp", []);
// custom directive
app.directive("myTestDirective", function() {
    return {
        restrict : "EACM",
        template : "<h1>My Test directive!</h1>"
    };
});
app.directive("myCommentInvokedDirective", function() {
    return {
      restrict : "M",
      replace : true,
      template : "<h1>My Comment Invoked directive!</h1>"
    };
});
app.directive("myTest1Directive", function() {
    return {
        restrict : "EACM",
        templateUrl : 'text1.html'
    };
});
