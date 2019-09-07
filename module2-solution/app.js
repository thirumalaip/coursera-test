(function () {
    'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  
  // To Buy Controller
  function ToBuyController(ShoppingListCheckOffService) {
    var showList = this;
    showList.items = ShoppingListCheckOffService.getItems();

    showList.removeItem = function (item) {
      ShoppingListCheckOffService.removeItem(item);
      ShoppingListCheckOffService.addItem(item.name, item.quantity);
    };

  }
// Already Bought Controller
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.buyItems();
  }

//Service
  function ShoppingListCheckOffService() {
    var service = this;
    var bought = [];
    var tobuy = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "cake",
        quantity: "99"
      },
      {
        name: "kit Kat",
        quantity: "4"
      },
      {
        name: "Cup Cake",
        quantity: "200"
      },
      {
        name: "Muffins",
        quantity: "7"
      }
    ];
  
    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      bought.push(item);
    };
  
    service.removeItem = function (itemIdex) {
      tobuy.splice(itemIdex, 1);
    };
  
    service.getItems = function () {
      return tobuy;
    };

    service.buyItems = function () {
      return bought;
    };
      
  }

})();