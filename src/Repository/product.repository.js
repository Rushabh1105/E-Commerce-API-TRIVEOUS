
const { Product } = require("../models/index");



class ProductRepository{
    async createProduct(data){
        try {
            console.log(data)
            return await Product.create(data);
        } catch (error) {
            throw { error }
        }
    }

    async getAllProducts(categoryId){
        try {
            if(categoryId){
                return await Product.findAll({where: {categoryId: categoryId}});
            }
            return await Product.findAll();
        } catch (error) {
            throw { error }
        }
    }

    async getProductById(id){
        try {
            return await Product.findOne({where: {id: id}});
        } catch (error) {
            
        }
    }

    async updateProduct(id, data){
        try {
            const product = await Product.findByPk(id);
            if(!product){
                throw new Error('No such product found');
            }

            return await product.update(data)
        } catch (error) {
            
        }
    }

    async deleteProduct(id){
        try {
            return await Product.destroy(id);
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = ProductRepository