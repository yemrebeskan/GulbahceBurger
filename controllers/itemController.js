const Item = require("../models/itemModel");

exports.addItem = async (req, res, next) => {
  try {
    const item = new Item({ ...req.body });
    await item.save();
    res.status(200).json({
      status: "success",
      item: {
        item,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;

    const item = await Item.findById(itemId);
    res.status(200).json({
      status: "success",
      item: item,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.status(200).json({
      status: "success",
      items: items,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    await Item.findByIdAndRemove(itemId);
    res.status(200).json({
      status: "success",
      message: "deleted",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteAllItem = async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.addToBasket = async (req, res, next) => {
  try {
    const itemId = req.params.id;

    const optionId = req.body.optionId;

    const item = await Item.findById(itemId);

    await req.user.addToCart(item, optionId);
    res.status(200).json({
      status: "success",
      item: {
        item,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getBasket = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
      basket: req.user.basket,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.removeFromBasket = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const item = await Item.findById(itemId);
    await req.user.removeFromCart(item._id);
    res.status(200).json({
      status: "success",
      item: {
        item,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.clearBasket = async (req, res, next) => {
  try {
    await req.user.clearCart();
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getTotalPrice = async (req, res, next) => {
  try {
    console.log(req.user);
    const totalPrice = await req.user.basket.totalPrice;
    res.status(200).json({
      status: "success",
      totalPrice: totalPrice,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
