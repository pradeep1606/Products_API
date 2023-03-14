require("dotenv").config();
const connectDB = require("./db");
const Product = require("./models/product");
const ProductJson = require("./products.json");
const URI = "mongodb+srv://xyz:123@cluster09.s3qnfvf.mongodb.net/shoping?retryWrites=true&w=majority"


const start = async () => {
    try {
        await connectDB(URI);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start();