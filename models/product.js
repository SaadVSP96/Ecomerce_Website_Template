const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    prodName: {
        type: String,
        required: [true, "product name must be provided"],
    },
    prodAdress: {
        type: String,
        required: [true, "product address(image path) must be provided"],
    },
    prodBrand: {
        type: String,
        required: [true, "product brand must be provided"],
    },
    categories: {
        type: [String],
        required: [true, "at least one category must be provided"],
    },
    prodPrice: {
        type: Number,
        required: [true, "Product price must be provided"],
    },
});

// Create the product model
module.exports = mongoose.model("Product", productSchema);
