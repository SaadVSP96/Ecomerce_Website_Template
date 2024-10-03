require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not_found");

// middleware
app.use(express.json());

// serve static files from the public directory
app.use(express.static("./public"));

// routes
app.use("api/v1/products", productsRouter);

// error middleware
app.use(notFoundMiddleware);

// start the server
const port = process.env.PORT || 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is listening on port ${port} ...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
