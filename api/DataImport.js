const express = require("express")
const User = require("./models/UserModel")
const users = require("./data/users")
const Product = require("./models/ProductModel")
const ProductsData = require("./data/Products")
const asyncHandler = require("express-async-handler")

const ImportData = express.Router();

ImportData.post("/user", asyncHandler (
    async(req,res) => {
        await User.remove({});
        const importUser = await User.insertMany(users);
        res.send({importUser});
    })
);

ImportData.post("/products", asyncHandler (
    async(req,res) => {
        await Product.remove({});
        const importProducts = await Product.insertMany(ProductsData);
        res.send({importProducts});
    })
);

module.exports = ImportData;