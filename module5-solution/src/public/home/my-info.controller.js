(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['UserService'];
    function MyInfoController(UserService) {
      var myInfoCtrl = this;
    
      myInfoCtrl.userInfo = UserService.getUserInfo();
    }
    
    })();
    