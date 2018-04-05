var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
  $scope.fName="chanchira";
  $scope.lName="yomchan";
});
app.directive("colortext",function(){
  return {
    template:"<h1 style='font-family:tahoma;color:pink'>CHANCHIRA<small><br>Angularjs</small></h1>"
  }
});
