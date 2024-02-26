const CartServiece = require("../Serviece/cart.serviece");

const cartServiece = new CartServiece();

const addToCart = async(req, res, next) => {
    try {
        // console.log(req.params.id)
        const response = await cartServiece.addToCart(req.user.id, req.params.id, req.body.quantity);

        return res.status(201).json({
            success: true,
            message: 'added to cart',
            data: response,
            error: null,
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getUserCart = async(req, res, next) => {
    try {
        const response = await cartServiece.getUserCart(req.user.id);
        return res.status(200).json({
            success: true,
            message: 'fetched the cart',
            data: response,
            error: null,
        })
    } catch (error) {
        next(error)
    }
}

const removeItemFromCart = async (req, res, next) => {
    try {
        const response = await cartServiece.removeItemFromCart(req.params.id, req.user.id);
        return res.status(200).json({
            success: true,
            message: 'deleted item from cart',
            data: response,
            error: null,
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const updateUserCart = async(req, res, next) => {
    try {
        const response = await cartServiece.updateCart(req.params.id, req.body);

        return res.status(200).json({
            success: true,
            message: 'updated item from cart',
            data: response,
            error: null,
        });

    } catch (error) {
        nexxt(error)
    }
}
module.exports = {
    addToCart,
    getUserCart,
    removeItemFromCart,
    updateUserCart
}