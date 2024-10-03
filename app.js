const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

// serve static files from the public directory
app.use(express.static("./public"));
app.use(express.json());

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
