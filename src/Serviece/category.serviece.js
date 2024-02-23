const CategoryRepository = require("../Repository/category.repository");


class CategoryServiece{
    constructor(){
        this.categoryRepository = new CategoryRepository();
    }

    async createNewCategory(data){
        if(!data.name){
            throw new Error('Category name is required')
        }

        try {
            const result = await this.categoryRepository.createCategory(data);
            return result;
        } catch (error) {
            throw {error}
        }
    }

    async getAllCategories(){
        try {
            return this.categoryRepository.getAllCategories();
        } catch (error) {
            throw {error}
        }
    }

    async updateCategory(id, data){
        try {
            return this.categoryRepository.updateCategory(id, data)
        } catch (error) {
            throw { error }
        }
    }

    async deleteCategory(id){
        try {
            return this.categoryRepository.deleteCategory(id)
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = CategoryServiece;