"use strict";

const shoppingCart = {
  template: `
  <h3 class="title">List of items</h3>

  <div class="container" ng-repeat="item in $ctrl.cartItems track by $index">
    <ol class="item-list">
      <li>Id: {{ item.id }} </li>
      <li>Product name: {{ item.product }} </li>
      <li>Price: {{ item.price | currency }} </li>
      <li>Quantity: {{ item.quantity }} </li>
    </ol>
  
  </div>
  `,

  controller: [ "CartService", function(CartService) {
    const vm = this;

    CartService.getItems().then(response => {
      console.log(response);
      vm.cartItems = response.data;
    })
  }]
}

angular
  .module("App")
  .component("shoppingCart", shoppingCart);