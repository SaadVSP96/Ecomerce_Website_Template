require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");
const productData = require("./products.js");
// console.log(productData);

const populate = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(productData);
        console.log("Success....");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

populate();
