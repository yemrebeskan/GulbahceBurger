const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  basket: {
    items: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Item",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        option: {
          optionName: {
            type: String,
          },
          price: {
            type: Number,
          },
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
        },
      },
    ],
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
});

userSchema.methods.addToCart = function (item, optionId) {
  console.log(item);
  const cartItemIndex = this.basket.items.findIndex((cp) => {
    return cp.item.toString() === item._id.toString();
  });
  const selectedOptionIndex = item.options.findIndex((option) => {
    return option._id.toString() === optionId;
  });

  const selectedOption = item.options[selectedOptionIndex];

  let newQuantity = 1;
  const updatedCartItems = [...this.basket.items];
  let newPrice = selectedOption
    ? selectedOption.price + item.price
    : item.price;

  if (cartItemIndex >= 0) {
    if (selectedOption) {
      if (
        this.basket.items[cartItemIndex].option?.optionName ===
        selectedOption.optionName
      ) {
        newPrice =
          this.basket.items[cartItemIndex].price +
          item.price +
          selectedOption.price;

        newQuantity = this.basket.items[cartItemIndex].quantity + 1;
        updatedCartItems[cartItemIndex].quantity = newQuantity;

        updatedCartItems[cartItemIndex].price = newPrice;
      } else {
        newPrice = item.price + selectedOption.price;
        updatedCartItems.push({
          item: item._id,
          name: item.name,
          option: {
            optionName: selectedOption.optionName,
            price: selectedOption.price,
          },
          quantity: newQuantity,
          price: newPrice,
        });
      }
    } else {
      if (this.basket.items[cartItemIndex].option) {
        selectedOption
          ? updatedCartItems.push({
              item: item._id,
              name: item.name,
              option: {
                optionName: selectedOption.optionName,
                price: selectedOption.price,
              },
              quantity: newQuantity,
              price: newPrice,
            })
          : updatedCartItems.push({
              item: item._id,
              name: item.name,
              quantity: newQuantity,
              price: newPrice,
            });
      } else {
        newPrice = this.basket.items[cartItemIndex].price + item.price;
        newQuantity = this.basket.items[cartItemIndex].quantity + 1;
        updatedCartItems[cartItemIndex].quantity = newQuantity;
        updatedCartItems[cartItemIndex].price = newPrice;
      }
    }
  } else {
    selectedOption
      ? updatedCartItems.push({
          item: item._id,
          name: item.name,
          option: {
            optionName: selectedOption.optionName,
            price: selectedOption.price,
          },
          quantity: newQuantity,
          price: newPrice,
        })
      : updatedCartItems.push({
          item: item._id,
          name: item.name,
          quantity: newQuantity,
          price: newPrice,
        });
  }

  const updatedTotalPrice = selectedOption
    ? this.basket.totalPrice + item.price + selectedOption.price
    : this.basket.totalPrice + item.price;

  const updatedCart = {
    items: updatedCartItems,
    totalPrice: updatedTotalPrice,
  };
  this.basket = updatedCart;
  return this.save();
};

userSchema.methods.removeFromCart = function (id) {
  const cartItemIndex = this.basket.items.findIndex((cp) => {
    return cp._id === id;
  });
  console.log(cartItemIndex);
  let newQuantity = 0;
  let updatedCartItems = [...this.basket.items];

  if (cartItemIndex >= 0) {
    newQuantity = this.basket.items[cartItemIndex].quantity - 1;

    updatedCartItems[cartItemIndex].quantity = newQuantity;
    if (newQuantity === 0) {
      updatedCartItems = this.basket.items.filter((perItem) => {
        return perItem.item.toString() !== item._id.toString();
      });
    }
    const updatedTotalPrice = this.basket.totalPrice - item.price;
    this.basket.items = updatedCartItems;
    this.basket.totalPrice = updatedTotalPrice;

    return this.save();
  }
  return new Error("error");
};

userSchema.methods.clearCart = function () {
  this.basket = { items: [] };
  return this.save();
};

const User = mongoose.model("User", userSchema);
module.exports = User;
