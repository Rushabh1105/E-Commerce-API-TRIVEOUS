const OrderServiece = require("../Serviece/order.serviece");


const orderServiece = new OrderServiece();

const placeOrder = async(req, res, next) => {
    try {
        const response = await orderServiece.createOrder(req.params.id, req.user);
        return res.status(201).json({
            success: true,
            message: 'Order placed successfully',
            data: response,
            error: null,
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getAllUserOrders = async(req, res, next) =>{
    try {
        const response = await orderServiece.getAllUserOrders(req.user.id);
        return res.status(200).json({
            success: true,
            message: 'fetched all orders',
            data: response,
            error: null
        })
    } catch (error) {
        next(error)
    }
}

const getOrderDetails = async(req, res, next) => {
    try {
        const response = await orderServiece.getUserOrderDetail(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'fetched all orders',
            data: response,
            error: null
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    placeOrder,
    getAllUserOrders,
    getOrderDetails
}