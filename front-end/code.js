angular.module("myApp", []).controller("myController", function ($scope) {
  $scope.myNumber = 100;
  $scope.result = null;
  $scope.multiplyBy10 = () => ($scope.result = $scope.myNumber * 10);
});
