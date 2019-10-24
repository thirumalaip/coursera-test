(function () {
    "use strict";
    
    angular.module('public')
    .service('UserService', UserService);
    
    UserService.$inject = ['$http'];
    function UserService($http) {
      var srv = this;
      srv.userInfo = null;
    
      srv.signup = (favorite_dish) => {
          return $http({
              url: 'https://thirumalaiperumal.herokuapp.com/menu_items/' + favorite_dish + '.json'
          });
      }
      srv.save = (userInfo) => {
          srv.userInfo = userInfo;
      }
    
      srv.getUserInfo = () => {
        return srv.userInfo;
          return {
          "first_name": "Thirumalai",
          "last_name": "Perumal",
          "email_address": "thirumalaitm205022@gmail.com ",
          "phone_number": "+1 321654789",
          "favorite_dish": {
            "id": 1,
            "short_name": "A1",
            "name": "Won Ton Soup with Chicken",
            "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
            "price_small": 2.55,
            "price_large": 5.0,
            "small_portion_name": "pint",
            "large_portion_name": "quart",
            "created_at": "2019-10-23T23:38:38.920Z",
            "updated_at": "2019-10-23T23:38:38.920Z",
            "category_short_name": "A",
            "image_present": true
          }
        }
      }
    }
    
    })();