

const CategoryRepository = require('../Repository/category.repository');
const ProductRepository = require('../Repository/product.repository');

class ProductServiece{
    constructor(){
        this.categoryRepository = new CategoryRepository();
        this.productRepository = new ProductRepository();
    }
}

module.exports = ProductServiece;