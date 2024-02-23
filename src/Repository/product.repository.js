const e = require("express");
const Product = require("../models/product");



class ProductRepository{
    async createProduct(data){
        try {
            return await Product.create(data);
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = ProductRepository