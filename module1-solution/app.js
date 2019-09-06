(function () {
  'use strict';

  angular.module('MsgApp', [])
    .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope) {

    $scope.checkStatus = function () {
      $scope.message = "";
      $scope.inputClass = "inputGrey"
      if ($scope.lunch) {
        var splitLunch = $scope.lunch.split(',');
        var splitLunchList = splitLunch.filter(function (element) {
          element = element.trim();
          return (element != null && element != '');
        });
        if (splitLunchList.length > 3) {
          $scope.message = "Too much!";
          $scope.messageClass = "messageRed";
          $scope.inputClass = "InputRed";
        } else if (splitLunchList.length <= 3) {
          $scope.message = "Enjoy";
          $scope.messageClass = "messageGreen";
          $scope.inputClass = "InputGreen";
        }
      } else {
        $scope.message = "Please Enter data first";
      }


    };
  };
})();
