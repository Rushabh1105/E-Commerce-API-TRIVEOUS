const CartRepository = require("../Repository/cart.repository");
const OrderRepository = require("../Repository/order.repository");
const ProductRepository = require("../Repository/product.repository");


class OrderServiece{
    constructor(){
        this.orderRepository = new OrderRepository();
        this.cartRepository = new CartRepository();
        this.productRepository = new ProductRepository()
    }

    async createOrder(cartId, user){
        try {
            const cartData = await this.cartRepository.getCartItemById(cartId);
            if(!cartData){
                throw new Error('No Cart item found')
            }
            const product = await this.productRepository.getProductById(cartData.productId)
            if(!product){
                throw new Error('No such data exists');
            }

            const orderData = {
                userId: user.id,
                productId: cartData.productId,
                quantity: cartData.quantity,
                status: 'placed'
            }
            await this.orderRepository.placeOrder(orderData)
            await product.update({quantity: product.quantity-cartData.quantity});
            await this.cartRepository.deleteCartItem(cartId, user.id);
            return orderData;
        } catch (error) {
            throw { error }
        }
    }

    async getAllUserOrders(userId){
        try {
            return await this.orderRepository.getAllOrders(userId);
        } catch (error) {
            throw { error }
        }
    }

    async getUserOrderDetail(orderId){
        try {
            const order = this.orderRepository.getOrderById(orderId);
            return order;
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = OrderServiece;