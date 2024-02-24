

const CategoryRepository = require('../Repository/category.repository');
const ProductRepository = require('../Repository/product.repository');

class ProductServiece{
    constructor(){
        this.categoryRepository = new CategoryRepository();
        this.productRepository = new ProductRepository();
    }

    async createNewProduct(data, user){
        try {
            const category = await this.categoryRepository.getCategoryByName(data.categoryName);
            if(!category){
                throw new Error('Oops wrong category')
            }

            return await this.productRepository.createProduct({
                name: data.name,
                price: data.price,
                categoryId: category.id,
                quantity: data.quantity,
                rating: 0,
                sellerId: user.id,
            });
        } catch (error) {
            throw { error }
        }
    }


    async getAllProducts(categoryName){
        try {
            if(categoryName){
                const category = await this.categoryRepository.getCategoryByName(categoryName);
                return this.productRepository.getAllProducts(category.id)
            }
            return this.productRepository.getAllProducts(null);
        } catch (error) {
            throw { error }
        }
    }

    async getProductById(id){
        try {
            return this.productRepository.getProductById(id);
        } catch (error) {
            throw { error }
        }
    }

    async updateProduct(id, data, user){
        try {
            const product = await this.productRepository.getProductById(id);

            if(product.dataValues.sellerId !== user.id){
                console.log('hello')
                throw new Error('Cannot change the product details');
            }

            return await this.productRepository.updateProduct(id, data);
        } catch (error) {
            throw { error }
        }
    }

    async deleteProduct(id){
        try {
            const product = await this.productRepository.getProductById(id);

            if(product.dataValues.sellerId !== user.id){
                console.log('hello')
                throw new Error('Cannot delete the product');
            }
            return await this.productRepository.deleteProduct(id);
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = ProductServiece;