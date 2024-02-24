

const ProductServiece = require('../Serviece/product.serviece');

const productServiece = new ProductServiece();


const createProduct = async(req, res, next) => {
    try {
        if(req.user.type === 'customer'){
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to add new product',
                error: 'please upgrade to seller account'
            })
        }

        const response = await productServiece.createNewProduct(req.body, req.user);
        return res.status(201).json({
            success: true,
            message: 'product created successfully',
            data: response,
            error: null,
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getAllProducts = async(req, res, next) => {
    try {
        const { categoryName } = req.query;
        const response = await productServiece.getAllProducts(categoryName);
        return res.status(200).json({
            success: true,
            message: 'product fetched successfully',
            data: response,
            error: null,
        })
    } catch (error) {
        next(error)
    }
}


const getProductById = async(req, res, next) => {
    try {
        const response = await productServiece.getProductById(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'product fetched successfully',
            data: response,
            error: null,
        })
    } catch (error) {
        next(error)
    }
}

const updateProduct = async(req, res, next) => {
    try {
        const response = await productServiece.updateProduct(req.params.id, req.body, req.user);

        return res.status(200).json({
            success: true,
            message: 'product updated successfully',
            data: response,
            error: null,
        })
    } catch (error) {
        next(error)
    }
}

const deleteProduct = async(req, res, next) => {
    try {
        const response = await productServiece.deleteProduct(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'product deleted successfully',
            data: response,
            error: null,
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}