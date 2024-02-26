const { Cart } = require("../models/index")



class CartRepository{
    async addToCart(data){
        try {
            return await Cart.create(data);
        } catch (error) {
            throw { error }
        }
    }

    async getCart(userId){
        try {
            return await Cart.findAll({where: {userId: userId}})
        } catch (error) {
            throw { error }
        }
    }

    async deleteCartItem(cartId, userId){
        try {
            return await Cart.destroy({where: {id: cartId, userId: userId}});
        } catch (error) {
            throw { error }
        }
    }

    async getCartItemById(cartId){
        return await Cart.findByPk(cartId);
    }

    async updateCart(cartId, data){
        try {
            const cartItem = await this.getCartItemById(cartId);

            if(!cartItem ){
                throw new Error('No such item')
            }
            return await cartItem.update(data);
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = CartRepository;