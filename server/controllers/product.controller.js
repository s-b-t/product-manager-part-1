const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allTheProducts => res.json({products: allTheProducts}))
        .catch(err => res.json({message: 'Something went wrong retrieving ALL PRODUCTS!', error: err}));
}

module.exports.createProduct = (request, response) => {
    const {title, price, description} = request.body;
    Product.create({
        title,
        price, 
        description
    })
        .then(product => response.json(product))
        .catch(error => response.json(error))
}