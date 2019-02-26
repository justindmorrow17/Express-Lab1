"use strict";

const express = require("express");
const cart = express.Router();

const cartItems = [
  {
    id: 1,
    product: "book",
    price: 13,
    quantity: 2
  },
  {
    id: 2,
    product: "food",
    price: 4,
    quantity: 10
  },
  {
    id: 3,
    product: "toy",
    price: 10,
    quantity: 1
  }
];

cart.get("/cart", (req, res) => {
  res.send(cartItems);
  console.log("GET req made");
});

cart.get("/cart/:id", (req, res) => {
  console.log("GET product request made");
    for (let item of cartItems) {
      if (item === req.params.id) {
        res.send(item);
        break;
      }
    }
  res.send(req.params.id);
  res.send(cartItems);
});

cart.post("/cart", (req, res) => {
  // cartItems.push(req.body.item);
  // res.send(cartItems);
  console.log("POST req made");
});

cart.delete("/cart/:id", (req, res) => {
  // for (let i = 0; i < cartItems.length; i++) {
  //   if (cartItems[i] === req.params.id) {
  //     cartItems.splice(i, 1);
  //     res.send(cartItems); 
  //     break;
  //   }
  // }
  console.log(cartItems.id)
  console.log("DELETE req made")
});

cart.put("/cart/:item", (req, res) => {
  console.log("PUT req made");
});


module.exports = cart;