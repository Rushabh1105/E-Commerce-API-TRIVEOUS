const { Order } = require('../models/index');

class OrderRepository{
    async placeOrder(data){
        try {
            return await Order.create(data);
        } catch (error) {
            throw { error }
        }
    }

    async getAllOrders(userId){
        try {
            return await Order.findAll({where: {userId: userId}})
        } catch (error) {
            throw { error }
        }
    }

    async getOrderById(orderId){
        try {
            return await Order.findByPk(orderId)
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = OrderRepository;