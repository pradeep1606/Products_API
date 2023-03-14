require("dotenv").config();
const express = require("express");
const app = express();
const products_route = require("./routes/products")
const connectDB = require("./db");

const PORT = process.env.PORT || 5000;
const URI = "mongodb+srv://xyz:123@cluster09.s3qnfvf.mongodb.net/shoping?retryWrites=true&w=majority"

app.get("/", (req, res) => {
    res.send("Connected. api path :- /api/products")
});

// middleware or To set route
app.use("/api/products", products_route)


const start = async () => {
    try {
        await connectDB(URI);
        app.listen(PORT, () => {
            console.log(`Conneced to Port : ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
};

start();
