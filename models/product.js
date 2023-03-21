const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Enter Price"],
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://rukminim1.flixcart.com/image/416/416/kkec4280/monitor/k/j/3/lc32g75tqswxxl-lc32g75tqswxxl-samsung-original-imafzqvfsxddw8kw.jpeg?q=70",
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: "shop",
    },
    featured: {
        type: Boolean,
        default: false,
    },
    // company: {
    //     type: String,
    //     enum: {
    //         values: ["apple", "samsung", "dell", "boat", "onepluse"],
    //         message: `{VALUE} is not supported`,
    //     },
    // },
});

module.exports = mongoose.model("Product", productSchema); 