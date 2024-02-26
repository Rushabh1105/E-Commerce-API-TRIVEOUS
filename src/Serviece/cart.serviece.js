const CartRepository = require("../Repository/cart.repository");
const ProductRepository = require("../Repository/product.repository");


class CartServiece{
    constructor(){
        this.cartRepository = new CartRepository();
        this.productRepository = new ProductRepository()
    }

    async addToCart(userId,  productId, quantity){
        try {
            let id = productId;

            const product = await this.productRepository.getProductById(id);
            // console.log(product)
            if(!product){
                throw new Error('No such product exists')
            }

            return await this.cartRepository.addToCart({userId: userId,  productId:  productId, quantity: quantity})
        } catch (error) {
            // console.log(error)
            throw { error }
        }
    }

    async getUserCart(userId){
        try {
            return await this.cartRepository.getCart(userId);
        } catch (error) {
            throw { error }
        }
    }


    async removeItemFromCart(cartId, userId){
        try {
            return await this.cartRepository.deleteCartItem(cartId, userId);
        } catch (error) {
            throw { error }
        }
    }

    async updateCart(cartId, data){
        try {
            return await this.cartRepository.updateCart(cartId, data);
        } catch (error) {
            
        }
    }
}

module.exports = CartServiece