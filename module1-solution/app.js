(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('LunchController', LunchController);
    
    LunchController.$inject = ['$scope'];

    function LunchController($scope) {
      
        $scope.checkStatus = function () {
         $scope.message = "";
            if($scope.lunch){
                var splitLunch = $scope.lunch.split(',');
                    if(splitLunch.length > 3){
                         $scope.message ="Too much";
                   }else if(splitLunch.length <= 3){
                         $scope.message ="Enjoy lunch";
                 }
       
            } else {
               $scope.message ="Please Enter data first";
            }

       
        };
    };
    })();
    