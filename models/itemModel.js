const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: [true, "A item must have a name"],
  },
  price: {
    type: Number,
    required: [true, "A item must have a price"],
  },
  options: [
    {
      optionName: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        default: 0,
        required: true,
      },
    },
  ],
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
