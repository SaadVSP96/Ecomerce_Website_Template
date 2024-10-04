const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({});
    console.log("hit 1");
    res.status(200).json({ products, nbHits: products.length });
};

// this controller will service the index page and the single product page
// by fetching all or one of the available products
const getAllProducts = async (req, res) => {
    const { id } = req.query; // Extract id from query parameters
    let result;
    try {
        // Check if an id is provided
        if (id) {
            // Use findById to find a single product by its _id
            result = await Product.findById(id);
            if (!result) {
                return res.status(404).json({ msg: "Product Not Found" }); // Handle case where product is not found
            }
        } else {
            // If no id is provided, fetch all products
            result = await Product.find({});
        }
        // Send back the product(s) found
        res.status(200).json({
            products: result,
            nbHits: result.length,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = { getAllProductsStatic, getAllProducts };
