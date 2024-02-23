const CategoryServiece = require("../Serviece/category.serviece");


const categoryServiece = new CategoryServiece();

const addNewCategory = async (req, res, next) => {
    try {
        if(req.user.type !== 'admin'){
            return res.status(400).json({
                success: false,
                message: 'you are not authorized to create category',
                error: null,
                data: null
            })
        }

        const response = await categoryServiece.createNewCategory(req.body);
        return res.status(201).json({
            success: true,
            message: 'New category added',
            error: null,
            data: response.name
        })
    } catch (error) {
        next(error)
    }
}

const getAllCategories = async(req, res, next) => {
    try {
        const response = await categoryServiece.getAllCategories();
        return res.status(200).json({
            success: true,
            message: 'fetched all categories',
            error: null,
            data: response,
        })
    } catch (error) {
        next(error)
    }
}

const updateCategory = async(req, res, next) => {
    try {
        if(req.user.type !== 'admin'){
            return res.status(400).json({
                success: false,
                message: 'you are not authorized to update category',
                error: null,
                data: null
            })
        }

        const response = await categoryServiece.updateCategory(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            message: 'updated the category',
            error: null,
            data: response,
        })
    } catch (error) {
        next(error)
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        if(req.user.type !== 'admin'){
            return res.status(400).json({
                success: false,
                message: 'you are not authorized to update category',
                error: null,
                data: null
            })
        }

        const response = await categoryServiece.deleteCategory(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'deleted the category',
            error: null,
            data: response,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addNewCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
}