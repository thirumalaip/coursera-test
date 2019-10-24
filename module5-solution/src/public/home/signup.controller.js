(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupController', SignupController);
    
    SignupController.$inject = ['UserService', '$timeout'];
    function SignupController(UserService, $timeout) {
      var signupCtrl = this;
    
      signupCtrl.notFound = false;
      signupCtrl.userInfoSaved = false;
    
      signupCtrl.signup = () => {
          UserService.signup(this.favorite_dish)
          .then((response)=>{
              debugger
              signupCtrl.notFound = false;
              UserService.save({
                  first_name: signupCtrl.first_name,
                  last_name: signupCtrl.last_name,
                  email_address: signupCtrl.email_address,
                  phone_number: signupCtrl.phone_number,
                  favorite_dish: response.data
              });
              signupCtrl.userInfoSaved = true;
              $timeout(()=>{
                  signupCtrl.userInfoSaved = false;
              }, 10000);
          })
          .catch((error)=>{
              signupCtrl.notFound = true;
          });
      }
    }
    
    })();
    