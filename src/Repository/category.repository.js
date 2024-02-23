const { Category } = require('../models/index');


class CategoryRepository{
    async createCategory(data){
        try {
            const category = await Category.create(data);
            return category
        } catch (error) {
            throw { error }
        }
    }

    async getAllCategories(){
        try {
            return Category.findAll();
        } catch (error) {
            console.log(error)
            throw {error}
        }
    }

    async updateCategory(id, data){
        try {
            const category = await Category.findByPk(id);
            if(!category){
                throw new Error('No such category')
            }

            return await category.update(data);
        } catch (error) {
            throw { error }
        }
    }

    async deleteCategory(id){
        try {
            const category = await Category.findByPk(id);
            if(!category){
                throw new Error('No such category')
            }

            return await category.destroy(id);
        } catch (error) {
            throw {error}
        }
    }

    async getCategoryByName(name){
        try {
            const category = await Category.findOne({where: {name: name}})
            if(!category){
                throw new Error('No such category');
            }

            return category;
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = CategoryRepository;