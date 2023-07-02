const express = require("express");

const router = express.Router();
const itemController = require("../controllers/itemController");

router
  .route("/carts")
  .get(itemController.getBasket)
  .delete(itemController.clearBasket);

router
  .route("/carts/:id")
  .put(itemController.addToBasket)
  .delete(itemController.removeFromBasket);

router
  .route("/items")
  .post(itemController.addItem)
  .get(itemController.getItems);

router
  .route("/items/:id")
  .get(itemController.getItem)
  .delete(itemController.deleteItem);

router.route("/items/total/price").get(itemController.getTotalPrice);

module.exports = router;
