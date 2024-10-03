const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({});
    console.log("hit 1");
    res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    console.log("hit 2");
    res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
